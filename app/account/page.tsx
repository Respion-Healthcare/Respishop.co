
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AccountPage() {

  const router = useRouter()

  useEffect(() => {

    const logged = localStorage.getItem("loggedIn")

    if (logged) {
      router.push("/account/dashboard")
    } else {
      router.push("/account/login")
    }

  }, [])

  return null
}