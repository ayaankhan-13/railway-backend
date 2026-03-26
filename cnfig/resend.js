import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// OTP send function
export const sendOTPEmail = async (email, otp) => {
  try {
    const data = await resend.emails.send({
      from: "<onboarding@resend.dev>",
      to: email,
      subject: "Your OTP Code",
      html: `
        <div style="font-family:Arial">
          <h2>Your OTP Code</h2>
          <h1 style="color:#4F46E5">${otp}</h1>
          <p>This OTP will expire in 5 minutes.</p>
        </div>
      `,
    });

    console.log("Email sent:", data);
    return data;
  } catch (error) {
    console.log("Email error:", error);
    throw error;
  }
};