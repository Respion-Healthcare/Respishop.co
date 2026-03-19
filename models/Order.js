import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        items: [
            {
                productId: String,
                name: String,
                quantity: Number,
                price: Number,
            },
        ],
        total: { type: Number, required: true },
        address: {
            firstName: String,
            lastName: String,
            company: String,
            address1: String,
            address2: String,
            city: String,
            state: String,
            country: String,
            pincode: String,
            phone: String,
        },
        notes: String,
        paymentMethod: { type: String, default: "cod" },
        status: { type: String, default: "Processing" },
    },
    { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);