import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        phone: {
            type: String,
            required: true,
        },

        password: {
            type: String,
            required: true,
        },

        addresses: [
            {
                firstName: { type: String, required: true },
                lastName: { type: String, required: true },
                company: String,
                address1: { type: String, required: true },
                address2: String,
                city: { type: String, required: true },
                state: { type: String, required: true },
                country: { type: String, default: "India" },
                pincode: { type: String, required: true },
                phone: { type: String, required: true },
                isDefault: { type: Boolean, default: false }
            }
        ]
    },
    { timestamps: true }
);

export default mongoose.models.User ||
    mongoose.model("User", UserSchema);