import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const body = await req.json()

    const { firstName, lastName, email, phone, message } = body

    // transporter (same as your order mail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Respishop Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // your company email
      subject: "New Contact Form Message",
      html: `
        <h2>📩 New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("Contact Mail Error:", error)
    return NextResponse.json({ success: false })
  }
}