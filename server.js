import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
    const { user_name, user_email, service, message } = req.body;

    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is missing');
        return res.status(500).json({ success: false, error: 'Server configuration error: Missing API Key' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'TechByMax Website <info@techbymax.com>',
            to: ['dela8759@gmail.com'], // Updated to verified email for testing
            subject: `New Contact: ${user_name} - ${service}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>New Inquiry</h2>
          <p><strong>Name:</strong> ${user_name}</p>
          <p><strong>Email:</strong> ${user_email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <hr/>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
            reply_to: user_email,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return res.status(400).json({ success: false, error: error.message });
        }

        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Server logic error:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Make sure to add your RESEND_API_KEY to a .env file`);
});
