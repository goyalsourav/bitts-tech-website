import { NextResponse } from 'next/server'
import { getResend } from '@/lib/resend'

const toEmail = process.env.RESEND_TO_EMAIL ?? 'bittstechinfo@gmail.com'
const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'BittsTech Website <onboarding@resend.dev>'

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
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
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 },
      )
    }

    const resend = getResend()

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

    const safeName = escapeHtml(name)
    const safeMobile = escapeHtml(mobile)
    const safeEmail = escapeHtml(email)
    const safeQuery = escapeHtml(query).replaceAll('\n', '<br />')

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
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
    })

    if (error) {
      return NextResponse.json(
        { error: error.message ?? 'Failed to send email.' },
        { status: 400 },
      )
    }

    return NextResponse.json({ id: data?.id })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong while sending your request.' },
      { status: 500 },
    )
  }
}
