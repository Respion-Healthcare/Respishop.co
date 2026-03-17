"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Dashboard(){

  const router = useRouter()
  const [activeTab, setActiveTab] = useState("dashboard")

  const [orders, setOrders] = useState<any[]>([])

  const logout = ()=>{
    localStorage.removeItem("loggedIn")
    router.push("/account/login")
  }

  // ✅ Load orders from localStorage
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]")
    setOrders(storedOrders)
  }, [])

  return(

    <div className="min-h-screen bg-gray-100 pt-24 px-4">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

        {/* Sidebar */}
        <div className="bg-white rounded-lg shadow p-5 space-y-4">

          <h2 className="font-semibold text-lg">My Account</h2>

          <button onClick={()=>setActiveTab("dashboard")} className="block w-full text-left">
            Dashboard
          </button>

          <button onClick={()=>setActiveTab("orders")} className="block w-full text-left">
            Orders
          </button>

          <button onClick={()=>setActiveTab("address")} className="block w-full text-left">
            Saved Addresses
          </button>

          <button onClick={()=>setActiveTab("account")} className="block w-full text-left">
            Account Details
          </button>

          <button onClick={logout} className="text-red-500">
            Logout
          </button>

        </div>

        {/* Content */}
        <div className="md:col-span-3 bg-white rounded-lg shadow p-8">

          {/* Dashboard */}
          {activeTab === "dashboard" && (
            <>
              <h1 className="text-2xl font-semibold mb-4">
                Welcome to your account
              </h1>
              <p className="text-gray-600">
                Manage everything here.
              </p>
            </>
          )}

          {/* Orders */}
          {activeTab === "orders" && (
            <>
              <h1 className="text-2xl font-semibold mb-4">My Orders</h1>

              {orders.length === 0 ? (
                <p>No orders yet.</p>
              ) : (
                <div className="space-y-4">

                  {orders.map((order) => (

                    <div key={order.id} className="border p-4 rounded">

                      <p className="text-sm text-gray-500">
                        Order ID: {order.id}
                      </p>

                      <p className="text-sm text-gray-500">
                        Date: {order.date}
                      </p>

                      <p className="text-sm text-blue-600">
                        Status: {order.status}
                      </p>

                      <div className="mt-2 space-y-1">

                        {order.items.map((item:any, i:number) => (
                          <p key={i}>
                            {item.name} × {item.quantity}
                          </p>
                        ))}

                      </div>

                      <p className="font-semibold mt-2">
                        Total: ₹{order.total}
                      </p>

                    </div>

                  ))}

                </div>
              )}
            </>
          )}

          {/* Address */}
          {activeTab === "address" && (
            <>
              <h1 className="text-2xl font-semibold mb-4">Saved Addresses</h1>
              <p>No address saved.</p>
            </>
          )}

          {/* Account */}
          {activeTab === "account" && (
            <>
              <h1 className="text-2xl font-semibold mb-4">Account Details</h1>

              <input placeholder="Name" className="border p-2 w-full mb-3" />
              <input placeholder="Email" className="border p-2 w-full mb-3" />

              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Save
              </button>
            </>
          )}

        </div>

      </div>

    </div>
  )
}