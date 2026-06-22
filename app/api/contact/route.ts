import { NextResponse } from 'next/server'
import { getSmtpFrom, getSmtpTransporter, hasSmtpConfig } from '@/lib/mailer'

export const runtime = 'nodejs'

const requiredToEmails = ['contact@bittstech.com', 'bittstechinfo@gmail.com']

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function isValidMobileNumber(value: string) {
  const digits = value.replace(/\D/g, '')
  const plusCount = value.split('+').length - 1
  const hasInvalidCharacters = /[^\d+\s().-]/.test(value)
  const hasMisplacedPlus = value.includes('+') && !value.startsWith('+')

  return (
    !hasInvalidCharacters
    && plusCount <= 1
    && !hasMisplacedPlus
    && digits.length >= 10
    && digits.length <= 15
    && !/^(\d)\1+$/.test(digits)
  )
}

function getToEmails() {
  return [
    ...(process.env.SMTP_TO_EMAIL ?? '')
      .split(',')
      .map((email) => email.trim())
      .filter(Boolean),
    ...requiredToEmails,
  ].filter((email, index, emails) => emails.indexOf(email) === index)
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export async function POST(request: Request) {
  try {
    if (!hasSmtpConfig()) {
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 },
      )
    }

    const body = await request.json()
    const name = clean(body.name)
    const mobile = clean(body.mobile)
    const email = clean(body.email)
    const query = clean(body.query)

    if (!name || !mobile || !email || !query) {
      return NextResponse.json(
        { error: 'Please enter the details.' },
        { status: 400 },
      )
    }

    if (!isValidMobileNumber(mobile)) {
      return NextResponse.json(
        { error: 'Please enter a valid mobile number.' },
        { status: 400 },
      )
    }

    const transporter = getSmtpTransporter()
    const fromEmail = getSmtpFrom()
    const safeName = escapeHtml(name)
    const safeMobile = escapeHtml(mobile)
    const safeEmail = escapeHtml(email)
    const safeQuery = escapeHtml(query).replaceAll('\n', '<br />')

    const emailPayload = {
      from: fromEmail,
      replyTo: email,
      subject: `New project request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #102033; line-height: 1.6;">
          <h2 style="margin: 0 0 16px;">New BittsTech project request</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Mobile Number:</strong> ${safeMobile}</p>
          <p><strong>Email Address:</strong> ${safeEmail}</p>
          <p><strong>Business Query:</strong></p>
          <div style="padding: 14px 16px; border-radius: 12px; background: #f3f7fb;">
            ${safeQuery}
          </div>
        </div>
      `,
      text: [
        'New BittsTech project request',
        '',
        `Name: ${name}`,
        `Mobile Number: ${mobile}`,
        `Email Address: ${email}`,
        '',
        'Business Query:',
        query,
      ].join('\n'),
    }

    const results: Array<{ to: string; id?: string; accepted: boolean; error?: string }> = []

    for (const to of getToEmails()) {
      try {
        const info = await transporter.sendMail({
          ...emailPayload,
          to,
        })
        const accepted = Array.isArray(info.accepted) ? info.accepted.map(String) : []
        const rejected = Array.isArray(info.rejected) ? info.rejected.map(String) : []
        const wasAccepted = accepted.includes(to) && !rejected.includes(to)

        results.push({
          to,
          id: info.messageId,
          accepted: wasAccepted,
          error: wasAccepted ? undefined : 'SMTP server rejected the email.',
        })
      } catch (error) {
        results.push({
          to,
          id: undefined,
          accepted: false,
          error: error instanceof Error ? error.message : 'Failed to send email.',
        })
      }
    }

    const delivered = results.filter((result) => result.accepted && result.id)
    const failed = results.filter((result) => !result.accepted)

    if (failed.length > 0) {
      return NextResponse.json(
        { error: failed[0].error ?? 'Failed to send email.' },
        { status: 400 },
      )
    }

    return NextResponse.json({
      id: delivered[0]?.id,
      sentTo: delivered.map((result) => result.to),
      failedTo: failed.map((result) => result.to),
    })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong while sending your request.' },
      { status: 500 },
    )
  }
}
