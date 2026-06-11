"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import OrdersPage from "./_components/Orders";

import {
  LayoutDashboard,
  Package,
  MapPin,
  User,
  LogOut,
  ShoppingBag,
  Home,
} from "lucide-react";

export default function Dashboard() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("dashboard");
  const [orders, setOrders] = useState<any[]>([]);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/account/login");
  };

  useEffect(() => {
    const storedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );
    setOrders(storedOrders);
  }, []);

  const tabs = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      key: "orders",
      label: "Orders",
      icon: Package,
    },
    {
      key: "address",
      label: "Saved Addresses",
      icon: MapPin,
    },
    {
      key: "account",
      label: "Account Details",
      icon: User,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">

        {/* Sidebar */}
        <aside className="w-full lg:w-72 bg-slate-900 text-white rounded-3xl p-6 shadow-xl">

          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              My Account
            </h2>

            <p className="text-slate-400 text-sm mt-1">
              Manage your profile & orders
            </p>
          </div>

          <nav className="space-y-2">

            {tabs.map((tab) => {
              const Icon = tab.icon;

              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === tab.key
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}

            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all mt-6"
            >
              <LogOut size={18} />
              Logout
            </button>

          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 space-y-6">

          {/* Welcome Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

            <h1 className="text-3xl font-bold text-gray-900">
              Welcome Back 👋
            </h1>

            <p className="text-gray-600 mt-2">
              Manage your orders, addresses, and account
              settings from one place.
            </p>

          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">
                    Total Orders
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    {orders.length}
                  </h3>
                </div>

                <ShoppingBag className="text-blue-600" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">
                    Saved Addresses
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    0
                  </h3>
                </div>

                <Home className="text-green-600" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">
                    Account Status
                  </p>

                  <h3 className="text-xl font-bold mt-2 text-green-600">
                    Active
                  </h3>
                </div>

                <User className="text-purple-600" />
              </div>
            </div>

          </div>

          {/* Dashboard */}
          {activeTab === "dashboard" && (
            <div className="bg-white rounded-3xl shadow-sm border p-8">
              <h2 className="text-2xl font-bold mb-3">
                Dashboard Overview
              </h2>

              <p className="text-gray-600">
                View your orders, manage your addresses,
                and update your profile information.
              </p>
            </div>
          )}

          {/* Orders */}
          {activeTab === "orders" && (
            <div className="bg-white rounded-3xl shadow-sm border p-8">

              <h2 className="text-2xl font-bold mb-5">
                My Orders
              </h2>

              {orders.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500">
                    No orders found.
                  </p>
                </div>
              ) : (
                <OrdersPage />
              )}

            </div>
          )}

          {/* Address */}
          {activeTab === "address" && (
            <div className="bg-white rounded-3xl shadow-sm border p-8">

              <h2 className="text-2xl font-bold mb-4">
                Saved Addresses
              </h2>

              <div className="border border-dashed rounded-xl p-8 text-center">
                <p className="text-gray-500">
                  No saved address found.
                </p>
              </div>

            </div>
          )}

          {/* Account */}
          {activeTab === "account" && (
            <div className="bg-white rounded-3xl shadow-sm border p-8">

              <h2 className="text-2xl font-bold mb-6">
                Account Details
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
                Save Changes
              </button>

            </div>
          )}

        </main>
      </div>
    </div>
  );
}