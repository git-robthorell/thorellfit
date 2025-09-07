# Thorell.fit / Pure Life Now Platform (Full)

A combined marketing + secure forms starter to unify the influencer landing and form automation workstreams.

- **Stack:** Next.js 14 (App Router) + TailwindCSS
- **Hosting:** Netlify with `@netlify/plugin-nextjs`
- **Forms:** Netlify Forms (private storage + notifications), optional SMTP function
- **Payments:** Stripe shareable payment links (update the link in `app/page.tsx`)
- **Language:** Program names **GLP1** and **GLP2** only

## 1) Local setup
```bash
npm install
npm run dev
# visit http://localhost:3000
```

## 2) Deploy on Netlify (dev environment)
1. Create a new GitHub repo and push this folder.
2. Netlify → **Add new site → Import an existing project** → select your repo.
3. Build command: `npm run build`
4. Publish directory: `.next`
5. First deploy will surface the Netlify Forms in the dashboard.

## 3) Secure forms
- `/forms/intake` → form name: `patient-intake`
- `/forms/contact` → form name: `contact`

In Netlify → **Forms → Notifications**:
- Send submission copies to **rob@thorell.fit**
- Send autoresponse to the submitter (uses the Email field)

## 4) Optional SMTP function
Set env vars in Netlify:
```
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM="Pure Life Now <no-reply@thorell.fit>"
BCC_EMAIL=rob@thorell.fit
```
Configure a **Form Submission** → **Outgoing webhook** to call
`/.netlify/functions/send-confirmation` if you prefer custom emails.

## 5) Payments
Update the **Join Now** button in `app/page.tsx` to your live Stripe payment link.

## 6) Hardening checklist
- Enforce HTTPS and correct domains
- Keep secrets in Netlify env
- Review/tighten CSP in `netlify.toml` as features grow
- Add reCAPTCHA v3 if spam increases
- Add Privacy Policy and Terms
