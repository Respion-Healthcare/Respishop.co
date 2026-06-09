import nodemailer from "nodemailer";

export const sendOrderMail = async (order) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const itemsHtml = order.items
      .map(
        (item) => `
          <tr>
            <td style="padding:12px;border-bottom:1px solid #e5e7eb;">
              ${item.name}
            </td>
            <td style="padding:12px;border-bottom:1px solid #e5e7eb;text-align:center;">
              ${item.size || "-"}
            </td>
            <td style="padding:12px;border-bottom:1px solid #e5e7eb;text-align:center;">
              ${item.quantity}
            </td>
            <td style="padding:12px;border-bottom:1px solid #e5e7eb;text-align:right;">
              ₹${item.price}
            </td>
          </tr>
        `
      )
      .join("");

    const mailOptions = {
      from: `"Your Store" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Company Email
      subject: `🛒 New Order Received #${order._id}`,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>New Order</title>
      </head>
      <body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif;">

        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:30px 0;">
          <tr>
            <td align="center">

              <table width="700" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 3px 10px rgba(0,0,0,0.08);">

                <!-- Header -->
                <tr>
                  <td style="background:#111827;padding:30px;text-align:center;">
                    <h1 style="color:#ffffff;margin:0;font-size:28px;">
                      🛒 New Order Received
                    </h1>
                    <p style="color:#d1d5db;margin-top:10px;">
                      Order ID: ${order._id}
                    </p>
                  </td>
                </tr>

                <!-- Order Summary -->
                <tr>
                  <td style="padding:30px;">
                    <h2 style="margin-top:0;color:#111827;">
                      Order Summary
                    </h2>

                    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e5e7eb;">
                      <thead>
                        <tr style="background:#f9fafb;">
                          <th style="padding:12px;text-align:left;">Product</th>
                          <th style="padding:12px;">Size</th>
                          <th style="padding:12px;">Qty</th>
                          <th style="padding:12px;text-align:right;">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${itemsHtml}
                      </tbody>
                    </table>

                    <div style="margin-top:20px;text-align:right;">
                      <h2 style="color:#16a34a;margin:0;">
                        Total: ₹${order.total}
                      </h2>
                    </div>
                  </td>
                </tr>

                <!-- Customer Details -->
                <tr>
                  <td style="padding:0 30px 30px;">
                    <h2 style="color:#111827;">
                      Customer Information
                    </h2>

                    <table width="100%" cellpadding="8" cellspacing="0" style="background:#f9fafb;border-radius:8px;">
                      <tr>
                        <td width="150"><strong>Name</strong></td>
                        <td>${order.address.firstName} ${order.address.lastName}</td>
                      </tr>

                      <tr>
                        <td><strong>Phone</strong></td>
                        <td>${order.address.phone}</td>
                      </tr>

                      ${order.address.email
          ? `
                        <tr>
                          <td><strong>Email</strong></td>
                          <td>${order.address.email}</td>
                        </tr>
                      `
          : ""
        }

                      <tr>
                        <td><strong>Payment</strong></td>
                        <td>${order.paymentMethod}</td>
                      </tr>

                      <tr>
                        <td><strong>Notes</strong></td>
                        <td>${order.notes || "N/A"}</td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Shipping Address -->
                <tr>
                  <td style="padding:0 30px 30px;">
                    <h2 style="color:#111827;">
                      📍 Shipping Address
                    </h2>

                    <div style="background:#f9fafb;padding:20px;border-radius:8px;line-height:1.7;">
                      ${order.address.firstName} ${order.address.lastName}
                      <br />
                      ${order.address.address1}
                      ${order.address.address2
          ? `<br />${order.address.address2}`
          : ""
        }
                      <br />
                      ${order.address.city},
                      ${order.address.state}
                      <br />
                      ${order.address.pincode}
                      <br />
                      Phone: ${order.address.phone}
                    </div>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:#f9fafb;padding:20px;text-align:center;color:#6b7280;font-size:13px;">
                    <p style="margin:0;">
                      Order generated automatically from your website.
                    </p>
                    <p style="margin-top:8px;">
                      ${new Date().toLocaleString("en-IN")}
                    </p>
                  </td>
                </tr>

              </table>

            </td>
          </tr>
        </table>

      </body>
      </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log("✅ Order email sent successfully");
  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
};

