"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, Loader2, HeartPulse, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // ✅ Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/account/dashboard");
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data: { error?: string; token?: string } = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        router.push("/account/dashboard");
      } else {
        setErrorMessage(data.error || "Login failed. Please check your credentials.");
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
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2 animate-fadeIn relative z-10">
        
        {/* Left Panel: Information & Branding */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
          
          <div className="space-y-3 relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-md">
                <HeartPulse className="w-6 h-6 text-blue-200" />
              </div>
              <span className="font-extrabold text-xl tracking-tight">Respishop</span>
            </div>
            
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight">Welcome Back!</h2>
            <p className="text-blue-100/90 text-sm font-light leading-relaxed">
              Sign in to manage your sleep therapy orders, update saved addresses, and access personalized healthcare support.
            </p>
          </div>

          <div className="space-y-4 pt-12 relative z-10">
            <div className="flex items-center gap-3 text-sm font-light text-blue-100">
              <ShieldCheck className="w-5 h-5 text-blue-300 flex-shrink-0" />
              <span>Secure authentication protocols</span>
            </div>
            <p className="text-[11px] text-blue-200/60 font-light">
              © {new Date().getFullYear()} Respishop India. All rights reserved.
            </p>
          </div>
        </div>

        {/* Right Panel: Login Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 tracking-tight">Account Login</h3>
            <p className="text-xs text-gray-400 mt-1 font-medium">Please enter your credentials to log in</p>
          </div>

          {errorMessage && (
            <div className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-start gap-2.5 text-xs text-rose-800 font-medium">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-xs text-gray-500 font-medium mb-1.5 block">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
                <input
                  required
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-100 bg-gray-50/50 pl-11 pr-4 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs text-gray-500 font-medium block">Password</label>
                <a href="#" className="text-[11px] text-blue-600 hover:underline font-semibold">Forgot Password?</a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
                <input
                  required
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-100 bg-gray-50/50 pl-11 pr-4 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 hover:shadow-lg text-white font-semibold py-3.5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-md disabled:bg-blue-400 mt-6"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Logging in...
                </>
              ) : (
                <>
                  Login <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-center mt-8 text-xs text-gray-500 font-medium">
            New to Respishop?{" "}
            <button
              type="button"
              onClick={() => router.push("/account/register")}
              className="text-blue-600 hover:underline font-bold ml-0.5"
            >
              Create an account
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