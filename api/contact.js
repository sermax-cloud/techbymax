import { Resend } from 'resend';

export default async function handler(req, res) {
    // Allow CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { user_name, user_email, service, message } = req.body;
    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is missing');
        return res.status(500).json({ success: false, error: 'Server configuration error: Missing API Key' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'TechByMax Website <info@techbymax.com>',
            to: ['info@techbymax.com'],
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
}
