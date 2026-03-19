import { NextResponse } from "next/server";
import connectToDatabase from "../../../../lib/Connection";
import User from "../../../../models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, password } = body;

        if (!name || !email || !phone || !password) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        await connectToDatabase();

        // ✅ Check if user exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        // ✅ Encrypt password
        const hashedPassword = await bcrypt.hash(password, 10);

        // ✅ Save user
        const newUser = await User.create({
            name,
            email,
            phone,
            password: hashedPassword,
        });

        return NextResponse.json({
            success: true,
            message: "User registered successfully",
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}