import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

function contactEmailHTML(input) {
  const { name, email, phone, message } = input;
  return `
  <!doctype html>
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>New Signup</title>
      <style>
        body { font-family: system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; background:#f6f7f9; padding:24px; }
        .card { max-width:560px; margin:auto; background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:24px; }
        h1 { font-size:18px; margin:0 0 16px; }
        .row { margin:8px 0; }
        .label { color:#6b7280; font-size:12px; text-transform:uppercase; letter-spacing:.04em; }
        .val { font-size:14px; color:#111827; }
        .msg { white-space:pre-wrap; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>New Signup / Contact</h1>
        <div class="row"><div class="label">Name</div><div class="val">${name}</div></div>
        <div class="row"><div class="label">Email</div><div class="val">${email}</div></div>
        <div class="row"><div class="label">Phone</div><div class="val">${phone}</div></div>
        <div class="row"><div class="label">Message</div><div class="val msg">${message}</div></div>
      </div>
    </body>
  </html>`;
}

export const server = {
  sendSignup: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(2, "Name is required"),
      email: z.string().email("Valid email required"),
      phone: z.string().min(5, "Phone required"),
      message: z.string().min(1, "Message required"),
    }),
    // Runs on the server
    handler: async (input) => {
      const to = import.meta.env.EMAIL_TO;
      const from = import.meta.env.EMAIL_FROM;

      const { data, error } = await resend.emails.send({
        from,
        to: [to],
        subject: `New signup from ${input.name}`,
        html: contactEmailHTML(input),
      });

      if (error) {
        throw new ActionError({ code: "BAD_REQUEST", message: error.message });
      }
      return { id: data?.id ?? null };
    },
  }),
};
