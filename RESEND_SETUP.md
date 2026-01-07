# Resend Email Setup Guide

You have successfully switched from EmailJS to Resend! Because Resend works securely on the server side, we have set up a small local server for you.

## 1. Get your Resend API Key

1.  Go to [Resend.com](https://resend.com) and sign up/login.
2.  Create an API Key.
3.  Verify your domain (optional for testing, but required for production to send to anyone other than yourself).

## 2. Configure Environment Variables

1.  Create a file named `.env` in the root of your project (next to `.env.example`).
2.  Add your API key inside it:

```env
RESEND_API_KEY=re_123456789your_key_here
```

## 3. Running the App

To send emails locally, you now need to run **both** the frontend and the backend.

**Option A: Two Terminals**
1.  Terminal 1: `npm run dev` (Frontend)
2.  Terminal 2: `npm run server` (Backend)

**Option B: Deployment**
If you deploy to **Vercel**:
1.  Add `RESEND_API_KEY` to your Vercel Project Settings > Environment Variables.
2.  Vercel automatically picks up standard API routes (though our `server.js` is for local Express). For Vercel, you might need to move `server.js` logic into a file like `api/contact.js` using Vercel's function syntax if you want serverless. Use the code below for `api/contact.js` if you deploy to Vercel:

```javascript
// api/contact.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { user_name, user_email, service, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['info@techbymax.com'],
      subject: `New Inquiry from ${user_name}`,
      html: `<p>Message from ${user_name}: ${message}</p>`,
      reply_to: user_email
    });

    if (error) return res.status(400).json({ error });
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

## 4. Testing

Since you are likely not verified on Resend yet, you can only send emails to the email address you signed up with on Resend. Ensure `server.js` (line 26) sends to that email.
