"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Phone, Lock, ArrowRight, Loader2, HeartPulse, ShieldCheck } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (form.password !== form.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "main-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          password: form.password,
        }),
      });

      const data: { error?: string; success?: boolean } = await res.json();

      if (res.ok) {
        alert("Account created successfully! Please log in.");
        router.push("/account/login");
      } else {
        setErrorMessage(data.error || "Registration failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50/50 px-4 py-16 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-indigo-400/10 blur-3xl pointer-events-none" />

      {/* Main Glass Card */}
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-xl border border-gray-100/50 shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2 animate-fadeIn relative z-10">
        
        {/* Left Panel: Branding & Marketing */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
          
          <div className="space-y-3 relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-md">
                <HeartPulse className="w-6 h-6 text-blue-200" />
              </div>
              <span className="font-extrabold text-xl tracking-tight">Respishop</span>
            </div>
            
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight">Join Respishop</h2>
            <p className="text-blue-100/90 text-sm font-light leading-relaxed">
              Create an account with us today to save shipping addresses, place orders easily, and enjoy first-class customer service.
            </p>
          </div>

          <div className="space-y-4 pt-12 relative z-10">
            <div className="flex items-center gap-3 text-sm font-light text-blue-100">
              <ShieldCheck className="w-5 h-5 text-blue-300 flex-shrink-0" />
              <span>100% Secure registration and data privacy</span>
            </div>
            <p className="text-[11px] text-blue-200/60 font-light">
              © {new Date().getFullYear()} Respishop India. All rights reserved.
            </p>
          </div>
        </div>

        {/* Right Panel: Signup Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 tracking-tight">Create Account</h3>
            <p className="text-xs text-gray-400 mt-1 font-medium">Please fill in your details below to register</p>
          </div>

          {errorMessage && (
            <div className="mb-4 p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-start gap-2.5 text-xs text-rose-800 font-medium">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="text-xs text-gray-500 font-medium mb-1 block">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
                <input
                  required
                  name="name"
                  placeholder="Rahul Sharma"
                  onChange={handleChange}
                  className="w-full border border-gray-100 bg-gray-50/50 pl-11 pr-4 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 font-medium mb-1 block">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="rahul@example.com"
                  onChange={handleChange}
                  className="w-full border border-gray-100 bg-gray-50/50 pl-11 pr-4 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 font-medium mb-1 block">Phone Number</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
                <input
                  required
                  name="phone"
                  placeholder="10-digit mobile number"
                  onChange={handleChange}
                  className="w-full border border-gray-100 bg-gray-50/50 pl-11 pr-4 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 font-medium mb-1 block">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
                  <input
                    required
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    onChange={handleChange}
                    className="w-full border border-gray-100 bg-gray-50/50 pl-11 pr-4 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1 block">Confirm Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
                  <input
                    required
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    onChange={handleChange}
                    className="w-full border border-gray-100 bg-gray-50/50 pl-11 pr-4 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 hover:shadow-lg text-white font-semibold py-3.5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-md disabled:bg-blue-400 mt-6"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Registering...
                </>
              ) : (
                <>
                  Register <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-center mt-6 text-xs text-gray-500 font-medium">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/account/login")}
              className="text-blue-600 hover:underline font-bold ml-0.5"
            >
              Log in instead
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}

// Inline helper component for Error Icon
function AlertCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}