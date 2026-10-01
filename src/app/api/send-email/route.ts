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
      from: `DigitalEdge 360°`,
      to: "contactus@digitaledge360.in",
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
        <html>
          <head>
            <style>
              @media only screen and (max-width: 480px) {
                .responsive-table tr {
                  display: block !important;
                  width: 100% !important;
                }
                .responsive-cell {
                  display: block !important;
                  width: 100% !important;
                  box-sizing: border-box !important;
                }
                .responsive-cell.label {
                  padding: 16px 20px 4px 20px !important;
                  text-align: left !important;
                  border-bottom: none !important;
                  font-size: 10px !important;
                  font-weight: 700 !important;
                  color: #a0aec0 !important;
                  text-transform: uppercase !important;
                  letter-spacing: 0.8px !important;
                }
                .responsive-cell.val {
                  padding: 0px 20px 16px 20px !important;
                  text-align: left !important;
                  font-size: 14px !important;
                  font-weight: 800 !important;
                }
                .responsive-banner-text {
                  display: block !important;
                  width: 100% !important;
                  padding-right: 0 !important;
                  margin-bottom: 16px !important;
                  text-align: center !important;
                }
                .responsive-banner-btn {
                  display: block !important;
                  width: 100% !important;
                  text-align: center !important;
                }
              }
            </style>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f3f6fb;">
            <div style="font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; background-color: #f3f6fb; padding: 24px 12px; width: 100%; margin: 0; box-sizing: border-box;">
              <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 550px; background-color: #ffffff; border-radius: 24px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.02), 0 8px 10px -6px rgba(0, 0, 0, 0.02); margin: 0 auto;">
                
                <!-- Logo Header -->
                <tr>
                  <td align="center" style="padding: 28px 20px; background-color: #ffffff; border-bottom: 1px solid #f0f4f8;">
                    <img src="cid:logo" alt="Digital Edge 360" width="130" style="display: block; border: 0;" />
                    <div style="font-size: 8px; color: #718096; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 8px; font-family: 'Segoe UI', sans-serif;">
                      DEVELOPMENT • BRANDING • MARKETING • E-COMMERCE
                    </div>
                  </td>
                </tr>

                <!-- Hero Banner -->
                <tr>
                  <td style="background: linear-gradient(135deg, #0a8bc7 0%, #2443ab 100%); padding: 36px 24px; text-align: left; color: #ffffff;">
                    <h1 style="margin: 0; font-size: 24px; font-weight: 800; line-height: 1.25; letter-spacing: -0.5px; color: #ffffff;">New Strategy<br>Call Booking</h1>
                    <div style="width: 32px; height: 2px; background-color: rgba(255, 255, 255, 0.4); margin: 14px 0;"></div>
                    <p style="margin: 0; font-size: 13px; color: rgba(255, 255, 255, 0.85); font-weight: 500; line-height: 1.4;">You have received a new strategy call booking request.</p>
                  </td>
                </tr>

                <!-- Details List -->
                <tr>
                  <td style="padding: 24px 20px 20px 20px;">
                    <table class="responsive-table" border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 1px solid #edf2f7; border-radius: 20px; overflow: hidden; border-collapse: separate; background-color: #ffffff;">
                      
                      <!-- Full Name -->
                      <tr>
                        <td class="responsive-cell label" style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 700; color: #718096; width: 130px; text-align: left; vertical-align: top;">
                          Full Name
                        </td>
                        <td class="responsive-cell val" style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 800; color: #1a202c; text-align: right; vertical-align: top;">
                          ${name}
                        </td>
                      </tr>

                      <!-- Category -->
                      <tr>
                        <td class="responsive-cell label" style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 700; color: #718096; width: 130px; text-align: left; vertical-align: top;">
                          Category
                        </td>
                        <td class="responsive-cell val" style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 800; color: #1a202c; text-align: right; vertical-align: top;">
                          ${company}
                        </td>
                      </tr>

                      <!-- Business Email -->
                      <tr>
                        <td class="responsive-cell label" style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 700; color: #718096; width: 130px; text-align: left; vertical-align: top;">
                          Business Email
                        </td>
                        <td class="responsive-cell val" style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 800; color: #2443ab; text-align: right; vertical-align: top;">
                          <a href="mailto:${email}" style="color: #2443ab; text-decoration: none; word-break: break-all;">${email}</a>
                        </td>
                      </tr>

                      <!-- Contact Details -->
                      <tr>
                        <td class="responsive-cell label" style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 700; color: #718096; width: 130px; text-align: left; vertical-align: top;">
                          Contact Details
                        </td>
                        <td class="responsive-cell val" style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 800; color: #1a202c; text-align: right; vertical-align: top;">
                          ${whatsapp}
                        </td>
                      </tr>

                      <!-- Goals & Location -->
                      <tr>
                        <td class="responsive-cell label" style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 700; color: #718096; width: 130px; text-align: left; vertical-align: top;">
                          Goals & Location
                        </td>
                        <td class="responsive-cell val" style="padding: 16px 20px; border-bottom: 1px solid #edf2f7; font-size: 13px; font-weight: 800; color: #1a202c; text-align: right; vertical-align: top;">
                          ${goal}
                        </td>
                      </tr>

                      <!-- Budget -->
                      <tr>
                        <td class="responsive-cell label" style="padding: 16px 20px; font-size: 13px; font-weight: 700; color: #718096; width: 130px; text-align: left; vertical-align: top;">
                          Budget
                        </td>
                        <td class="responsive-cell val" style="padding: 16px 20px; font-size: 13px; font-weight: 800; color: #2443ab; text-align: right; vertical-align: top;">
                          ${budget}
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>

                <!-- Action Banner -->
                <tr>
                  <td style="padding: 0 20px 28px 20px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f0f4ff; border-radius: 20px; padding: 24px; border: 1px solid #e0ebff;">
                      <tr>
                        <td class="responsive-banner-text" style="vertical-align: middle; padding-right: 15px; text-align: left;">
                          <h4 style="margin: 0 0 6px 0; font-size: 14px; font-weight: 800; color: #1d3fb5;">Ready to take the next step?</h4>
                          <p style="margin: 0; font-size: 11px; color: #4a5568; line-height: 1.45; font-weight: 500;">Reply to this email or contact the lead directly to schedule the strategy call.</p>
                        </td>
                        <td class="responsive-banner-btn" align="right" style="width: 110px; vertical-align: middle;">
                          <a href="mailto:${email}" style="background-color: #1d3fb5; color: #ffffff; padding: 12px 20px; border-radius: 10px; font-size: 11px; font-weight: 800; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; white-space: nowrap; box-shadow: 0 4px 10px rgba(29, 63, 181, 0.15);">REPLY NOW</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 28px 20px; background-color: #0a1128; text-align: center;">
                    <p style="margin: 0; font-size: 10px; color: #a0aec0; opacity: 0.8; font-weight: 500;">&copy; 2026 Digital Edge 360. All rights reserved.</p>
                    <div style="font-size: 8px; color: #718096; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 8px; font-family: 'Segoe UI', sans-serif;">
                      DEVELOPMENT • BRANDING • MARKETING • E-COMMERCE
                    </div>
                  </td>
                </tr>

              </table>
            </div>
          </body>
        </html>
      `,
      attachments: [
        {
          filename: "DE360-LOGO.png",
          path: "https://ik.imagekit.io/digitaledge360/digitaledge-in/DE360-LOGO.png",
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
