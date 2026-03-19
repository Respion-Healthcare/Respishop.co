"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // ✅ User is logged in → redirect to dashboard
      router.push("/account/dashboard");
    } else {
      // ❌ Not logged in → redirect to login
      router.push("/account/login");
    }
  }, [router]);

  return null; // No UI needed, just redirect
}