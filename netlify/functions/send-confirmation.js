// Optional: Send a custom confirmation email on Netlify Form submissions
// Enable in Netlify dashboard by setting env vars (SMTP_*), then configure
// a Form Submission → Outgoing webhook to invoke this function if desired.

import nodemailer from 'nodemailer';

export async function handler(event) {
  try {
    const { payload } = JSON.parse(event.body || '{}'); // Netlify form submission payload
    const email = payload?.data?.email;
    if (!email) return { statusCode: 200, body: 'No email field present; skipping.' };

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });

    const from = process.env.SMTP_FROM || 'Pure Life Now <no-reply@thorell.fit>';
    const info = await transporter.sendMail({
      from,
      to: email,
      bcc: process.env.BCC_EMAIL || 'rob@thorell.fit',
      subject: 'We received your submission',
      text: 'Thanks for your submission. Our team will get back to you shortly.',
      html: '<p>Thanks for your submission. Our team will get back to you shortly.</p>'
    });

    return { statusCode: 200, body: `Message sent: ${info.messageId}` };
  } catch (err) {
    return { statusCode: 500, body: String(err) };
  }
}
