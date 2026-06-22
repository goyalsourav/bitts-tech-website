import { createTransport, type Transporter } from 'nodemailer'

let transporter: Transporter | null = null

function readRequiredEnv(name: string) {
  const value = process.env[name]?.trim()

  if (!value) {
    throw new Error(`${name} is not configured.`)
  }

  return value
}

export function hasSmtpConfig() {
  return Boolean(
    process.env.SMTP_FROM?.trim()
    && process.env.SMTP_USER?.trim()
    && process.env.SMTP_PASS?.trim(),
  )
}

export function getSmtpFrom() {
  return readRequiredEnv('SMTP_FROM')
}

export function getSmtpTransporter() {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT ?? 465)
    const secure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === 'true'
      : port === 465

    transporter = createTransport({
      host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
      port,
      secure,
      auth: {
        user: readRequiredEnv('SMTP_USER'),
        pass: readRequiredEnv('SMTP_PASS').replace(/\s+/g, ''),
      },
    })
  }

  return transporter
}
