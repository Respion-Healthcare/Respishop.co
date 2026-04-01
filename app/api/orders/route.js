import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/Connection";
import Order from "../../../models/Order";
import jwt from "jsonwebtoken";
import User from "../../../models/User";
import { sendOrderMail } from "../../../lib/sendMail";


export async function POST(req) {
    try {
        await connectToDatabase();

        const body = await req.json();
        const token = req.headers.get("authorization")?.replace("Bearer ", "");
        if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

        const { items, total, address, paymentMethod, notes } = body;

        // ✅ ADDED VALIDATION (IMPORTANT)
        for (const item of items) {
            if (!item.size) {
                return NextResponse.json(
                    { error: `Size is required for product: ${item.name}` },
                    { status: 400 }
                );
            }
        }

        const order = await Order.create({
            user: decoded.id,
            items,
            total,
            address,
            notes,
            paymentMethod,
        });

        const user = await User.findById(decoded.id);

        sendOrderMail({
            ...order.toObject(),
            email: user.email,
        });

        return NextResponse.json({ success: true, orderId: order._id, order });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
// export async function GET(req) {
//     try {
//         await connectToDatabase();

//         // 1️⃣ Get token from headers
//         const token = req.headers.get("authorization")?.replace("Bearer ", "");
//         if (!token) {
//             return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//         }

//         // 2️⃣ Decode token to get user ID
//         let decoded;
//         try {
//             decoded = jwt.verify(token, process.env.JWT_SECRET);
//         } catch {
//             return NextResponse.json({ error: "Invalid token" }, { status: 401 });
//         }

//         const userId = decoded.id;

//         // 3️⃣ Fetch all orders for this user
//         const orders = await Order.find({ user: userId }).sort({ createdAt: -1 });

//         return NextResponse.json({ orders });
//     } catch (err) {
//         console.error(err);
//         return NextResponse.json({ error: "Server error" }, { status: 500 });
//     }
// }


// import { NextResponse } from "next/server";
// import connectToDatabase from "@/lib/Connection";
// import Order from "@/models/Order";
// import jwt from "jsonwebtoken";

export async function GET(req) {
    try {
        await connectToDatabase();

        // 1️⃣ Get token from headers
        const token = req.headers.get("authorization")?.replace("Bearer ", "");
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // 2️⃣ Decode token to get user ID
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

        const userId = decoded.id;

        // 3️⃣ Fetch all orders for this user and populate user details
        const orders = await Order.find({ user: userId })
            .populate("user", "name email phone") // populate only needed fields
            .sort({ createdAt: -1 });

        return NextResponse.json({ orders });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}