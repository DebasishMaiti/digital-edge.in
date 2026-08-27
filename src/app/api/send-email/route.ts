import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, whatsapp, goal, budget } = body;

    // Validate request body
    if (!name || !company || !email || !whatsapp || !goal || !budget) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"DigitalEdge 360°" <${process.env.SMTP_USER}>`,
      to: "maiti.debasish2001@gmail.com",
      subject: `New Lead: Strategy Call Booking from ${name}`,
      text: `
You have received a new strategy call booking:

Full Name: ${name}
Company: ${company}
Business Email: ${email}
WhatsApp: ${whatsapp}
Goal: ${goal} 
Budget: ${budget}
      `,
      html: `
        <div style="font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; background-color: #f3f6fb; padding: 40px 10px; width: 100%; margin: 0; box-sizing: border-box;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 550px; background-color: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.02), 0 8px 10px -6px rgba(0, 0, 0, 0.02); margin: 0 auto;">
            
            <!-- Logo Header -->
            <tr>
              <td align="center" style="padding: 30px 24px; background-color: #ffffff;">
                <img src="cid:logo" alt="Digital Edge 360" width="140" style="display: block; border: 0;" />
                <div style="font-size: 8px; color: #718096; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 8px; font-family: 'Segoe UI', sans-serif;">
                  DEVELOPMENT • BRANDING • MARKETING • E-COMMERCE
                </div>
              </td>
            </tr>

            <!-- Hero Banner -->
            <tr>
              <td style="background: linear-gradient(135deg, #0a8bc7 0%, #2443ab 100%); padding: 40px 30px; text-align: left; color: #ffffff; position: relative;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td>
                      <h1 style="margin: 0; font-size: 26px; font-weight: 800; line-height: 1.2; letter-spacing: -0.5px; color: #ffffff;">New Strategy<br>Call Booking</h1>
                      <div style="width: 40px; height: 1.5px; background-color: rgba(255, 255, 255, 0.35); margin: 16px 0;"></div>
                      <p style="margin: 0; font-size: 13px; color: rgba(255, 255, 255, 0.85); font-weight: 500; line-height: 1.4;">You have received a new strategy call booking request.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Details List Table -->
            <tr>
              <td style="padding: 30px 24px 24px 24px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 1px solid #edf2f7; border-radius: 16px; overflow: hidden; border-collapse: separate; background-color: #ffffff;">
                  
                  <!-- Full Name -->
                  <tr>
                    <td style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 700; color: #718096;">
                      Full Name
                    </td>
                    <td align="right" style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 800; color: #1a202c;">
                      ${name}
                    </td>
                  </tr>

                  <!-- Company -->
                  <tr>
                    <td style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 700; color: #718096;">
                      Company
                    </td>
                    <td align="right" style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 800; color: #1a202c;">
                      ${company}
                    </td>
                  </tr>

                  <!-- Business Email -->
                  <tr>
                    <td style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 700; color: #718096;">
                      Business Email
                    </td>
                    <td align="right" style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 800; color: #2443ab;">
                      <a href="mailto:${email}" style="color: #2443ab; text-decoration: none;">${email}</a>
                    </td>
                  </tr>

                  <!-- WhatsApp -->
                  <tr>
                    <td style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 700; color: #718096;">
                      WhatsApp
                    </td>
                    <td align="right" style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 800; color: #1a202c;">
                      ${whatsapp}
                    </td>
                  </tr>

                  <!-- Goal -->
                  <tr>
                    <td style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 700; color: #718096;">
                      Goal
                    </td>
                    <td align="right" style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 800; color: #1a202c;">
                      ${goal}
                    </td>
                  </tr>

                  <!-- Budget -->
                  <tr>
                    <td style="padding: 16px 20px; font-size: 13px; font-weight: 700; color: #718096;">
                      Budget
                    </td>
                    <td align="right" style="padding: 16px 20px; font-size: 13px; font-weight: 800; color: #2443ab;">
                      ${budget}
                    </td>
                  </tr>

                </table>
              </td>
            </tr>

            <!-- Action Banner -->
            <tr>
              <td style="padding: 0 24px 30px 24px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f0f4ff; border-radius: 16px; padding: 20px 24px;">
                  <tr>
                    <td style="vertical-align: middle; padding-right: 15px;">
                      <h4 style="margin: 0 0 4px 0; font-size: 13px; font-weight: 800; color: #1a202c;">Ready to take the next step?</h4>
                      <p style="margin: 0; font-size: 11px; color: #4a5568; line-height: 1.4; font-weight: 500;">Reply to this email or contact the lead directly to schedule the strategy call.</p>
                    </td>
                    <td align="right" style="width: 100px; vertical-align: middle;">
                      <a href="mailto:${email}" style="background-color: #1d3fb5; color: #ffffff; padding: 12px 18px; border-radius: 8px; font-size: 11px; font-weight: 800; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; white-space: nowrap; box-shadow: 0 2px 4px rgba(29, 63, 181, 0.2);">REPLY NOW</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding: 30px 24px; background-color: #0a1128; text-align: center;">
                <p style="margin: 0; font-size: 10px; color: #a0aec0; opacity: 0.8; font-weight: 500;">&copy; 2026 Digital Edge 360. All rights reserved.</p>
                <div style="font-size: 8px; color: #718096; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 8px; font-family: 'Segoe UI', sans-serif;">
                  DEVELOPMENT • BRANDING • MARKETING • E-COMMERCE
                </div>
              </td>
            </tr>

          </table>
        </div>
      `,
      attachments: [
        {
          filename: "DE360-LOGO.png",
          path: path.join(process.cwd(), "public/DE360-LOGO.png"),
          cid: "logo",
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
