"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-10 hidden md:flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4">Login</h2>
          <p className="text-sm opacity-90">
            Get access to your Orders, Wishlist and Recommendations.
          </p>
        </div>

        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-5">
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full border px-4 py-3 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="Password"
              className="w-full border px-4 py-3 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              disabled={loading}
              className="w-full bg-orange-500 text-white py-3 rounded-md"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-6 text-sm">
            New to Respishop?
            <span
              onClick={() => router.push("/account/register")}
              className="text-blue-600 cursor-pointer ml-1"
            >
              Create an account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}