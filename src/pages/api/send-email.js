import nodemailer from "nodemailer";

export async function post({ request }) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Configure Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@b4blurb.com", // your Zoho email
        pass: process.env.ZOHO_APP_PASSWORD, // app password from Zoho
      },
    });

    // Build email content as HTML table
    const htmlContent = `
      <h2>📚 New Book Publishing Inquiry</h2>
      <table border="1" cellpadding="8" cellspacing="0" 
             style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
        <tr><td><b>Name</b></td><td>${name}</td></tr>
        <tr><td><b>Email</b></td><td>${email}</td></tr>
        <tr><td><b>Phone</b></td><td>${phone || "-"}</td></tr>
        <tr><td><b>Message</b></td><td>${message || "-"}</td></tr>
      </table>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Website Inquiry" <info@b4blurb.com>`,
      to: "info@b4blurb.com",
      subject: "New Book Publishing Inquiry",
      html: htmlContent,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function get() {
  return new Response(JSON.stringify({ message: "working" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
}