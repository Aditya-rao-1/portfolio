import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const contactEmail = process.env.CONTACT_EMAIL_E;

export async function POST(request: Request) {
  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY environment variable." },
      { status: 500 }
    );
  }

  if (!contactEmail) {
    return NextResponse.json(
      { error: "Missing CONTACT_EMAIL_E environment variable." },
      { status: 500 }
    );
  }

  const resend = new Resend(resendApiKey);
  const { name, message } = await request.json();

  if (!name || !message) {
    return NextResponse.json({ error: "Name and message are required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Adithya Rao <onboarding@resend.dev>",
    to: [contactEmail],
    subject: `New portfolio message from ${name}`,
    text: `Name: ${name}\n\nMessage:\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}