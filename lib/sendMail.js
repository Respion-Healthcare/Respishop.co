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

        // ✅ UPDATED (added size)
        const itemsList = order.items
            .map(
                (item) =>
                    `${item.name} (Size: ${item.size}) (Qty: ${item.quantity}) - ₹${item.price}`
            )
            .join("\n");

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // company mail
            subject: `🛒 New Order Received - ${order._id}`,
            text: `
New Order Received!

Order ID: ${order._id}

Items:
${itemsList}

Total: ₹${order.total}

Customer Details:
Name: ${order.address.firstName} ${order.address.lastName}
Phone: ${order.address.phone}

Address:
${order.address.address1}, ${order.address.city}, ${order.address.state}, ${order.address.pincode}

Payment: ${order.paymentMethod}
Notes: ${order.notes || "N/A"}
            `,
        };

        await transporter.sendMail(mailOptions);

        console.log("✅ Email sent");
    } catch (error) {
        console.error("❌ Email error:", error);
    }
};    