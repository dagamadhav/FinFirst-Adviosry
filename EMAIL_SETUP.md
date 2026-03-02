## Email sending (ContactForm → Admin inbox)

This project uses **EmailJS** to send one email to a single admin address for every pitch submission.

### 1) Create EmailJS config

- Create an EmailJS account
- Create:
  - **Email Service** (connect Gmail/SMTP/etc.)
  - **Email Template**

### 2) Template variables (recommended)

In your EmailJS template, use these variables:

- `{{company_name}}`
- `{{website}}`
- `{{founder_email}}`
- `{{submitted_at}}`
- `{{pitch}}`
- `{{message}}` (pre-formatted, multiline)

Set the template **recipient** to your admin email (single address).

### 3) Add env vars for Vite

Copy `env.example` → `.env.local` and fill in:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### 4) Where it’s used

`src/components/ContactForm.tsx` calls `sendPitchToAdmin()` from `src/services/email.ts`.


