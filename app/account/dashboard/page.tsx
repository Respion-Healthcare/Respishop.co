
"use client"

import { useRouter } from "next/navigation"

export default function Dashboard(){

  const router = useRouter()

  const logout = ()=>{
    localStorage.removeItem("loggedIn")
    router.push("/account/login")
  }

  return(

    <div className="min-h-screen bg-gray-100 pt-24 px-4">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

        {/* Sidebar */}

        <div className="bg-white rounded-lg shadow p-5 space-y-4">

          <h2 className="font-semibold text-lg">
            My Account
          </h2>

          <button className="block w-full text-left hover:text-blue-600">
            Dashboard
          </button>

          <button className="block w-full text-left hover:text-blue-600">
            Orders
          </button>

          <button className="block w-full text-left hover:text-blue-600">
            Saved Addresses
          </button>

          <button className="block w-full text-left hover:text-blue-600">
            Account Details
          </button>

          <button
            onClick={logout}
            className="text-red-500"
          >
            Logout
          </button>

        </div>

        {/* Content */}

        <div className="md:col-span-3 bg-white rounded-lg shadow p-8">

          <h1 className="text-2xl font-semibold mb-4">
            Welcome to your account
          </h1>

          <p className="text-gray-600">
            Here you can manage orders, addresses and account details.
          </p>

        </div>

      </div>

    </div>
  )
}