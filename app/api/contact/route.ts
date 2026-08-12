import { NextRequest, NextResponse } from "next/server";

// This route delivers contact form submissions to info@abacus-star.com.
//
// PRIMARY DELIVERY: FormSubmit (https://formsubmit.co) — a free email
// forwarding service that requires NO signup and NO API key. It simply
// relays form data to the recipient inbox via email.
//
// ⚠️ ONE-TIME ACTIVATION STEP REQUIRED:
// The first time a message is sent, FormSubmit emails info@abacus-star.com
// an "Activate Form" confirmation link. Someone with access to that inbox
// must click it once — after that, every future submission is delivered
// straight to info@abacus-star.com automatically, with no further action
// needed.
//
// OPTIONAL UPGRADE: If you'd prefer a dedicated transactional email
// provider (e.g. Resend, SendGrid, Postmark) instead of FormSubmit, set
// RESEND_API_KEY as an environment variable — the route will automatically
// use it instead (see the block below).

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RECIPIENT = "info@abacus-star.com";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  let payload: ContactPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const message = (payload.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 422 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 422 });
  }

  try {
    if (process.env.RESEND_API_KEY) {
      // Optional upgrade path: dedicated transactional email provider.
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Abacus Star Website <no-reply@abacus-star.com>",
          to: [RECIPIENT],
          reply_to: email,
          subject: `New enquiry from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        }),
      });
      if (!res.ok) throw new Error("Resend delivery failed");
    } else {
      // Default: FormSubmit — no API key or signup needed.
      const res = await fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New enquiry from ${name} — Abacus Star website`,
          _template: "table",
          _captcha: "false",
          _replyto: email,
        }),
      });
      if (!res.ok) throw new Error("FormSubmit delivery failed");
    }
  } catch (err) {
    console.error("Contact form email delivery failed:", err);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
