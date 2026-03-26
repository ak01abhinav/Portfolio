import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["abhinav01.spaces@gmail.com"],
      replyTo: email,
      subject: `New message from ${name} — Portfolio Contact Form`,
      html: `
  <div style="margin:0; padding:32px 16px; background:#f8fafc; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
    
    <div style="max-width:600px; margin:0 auto; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; overflow:hidden;">
      
      <!-- Header -->
      <div style="padding:20px 24px; border-bottom:1px solid #e2e8f0;">
        <h2 style="margin:0; font-size:18px; color:#0f172a; font-weight:600;">
          New Contact Form Submission
        </h2>
        <p style="margin:4px 0 0; font-size:13px; color:#64748b;">
          Portfolio notification
        </p>
      </div>

      <!-- Body -->
      <div style="padding:24px;">
        
        <!-- Name -->
        <div style="margin-bottom:16px;">
          <p style="margin:0; font-size:12px; color:#64748b; letter-spacing:0.5px;">NAME</p>
          <p style="margin:4px 0 0; font-size:14px; color:#0f172a; font-weight:600;">
            ${name}
          </p>
        </div>

        <!-- Email -->
        <div style="margin-bottom:16px;">
          <p style="margin:0; font-size:12px; color:#64748b;">EMAIL</p>
          <p style="margin:4px 0 0;">
            <a href="mailto:${email}" style="font-size:14px; color:#2563eb; text-decoration:none;">
              ${email}
            </a>
          </p>
        </div>

        <!-- Message -->
        <div style="margin-top:20px;">
          <p style="margin:0 0 8px; font-size:12px; color:#64748b;">MESSAGE</p>
          
          <div style="padding:16px; background:#f1f5f9; border-radius:6px; font-size:14px; color:#0f172a; line-height:1.6;">
            ${message.trim().replace(/\n/g, "<br/>")}
          </div>
        </div>

      </div>

      <!-- Footer -->
      <div style="padding:16px 24px; border-top:1px solid #e2e8f0; text-align:center;">
        <p style="margin:0; font-size:12px; color:#64748b;">
          Reply directly to this email to respond to ${name}
        </p>
      </div>

    </div>

  </div>
`,
    });

    console.log("[Resend] data:", JSON.stringify(data));
    console.log("[Resend] error:", JSON.stringify(error));

    if (error) {
      return NextResponse.json(
        { error: error.message ?? "Failed to send email." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, emailId: data?.id },
      { status: 200 },
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
