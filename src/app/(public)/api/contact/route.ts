import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const emailFrom = process.env.EMAIL_FROM;

    if (!apiKey || !contactEmail || !emailFrom) {
      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    }

    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (
      !name ||
      name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      !subject ||
      subject.length > 150 ||
      message.length < 5 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { message: "Please provide valid form information." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: emailFrom,
      to: [contactEmail],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { message: "Unable to send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { message: "Your message has been sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
