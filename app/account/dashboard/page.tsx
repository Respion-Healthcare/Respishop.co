"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  User as UserIcon, 
  Package, 
  MapPin, 
  Settings, 
  LogOut, 
  Plus, 
  Edit2, 
  Trash2, 
  Check, 
  Mail, 
  Phone, 
  ShoppingBag, 
  CreditCard, 
  Calendar,
  Home,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import OrdersPage from "./_components/Orders";

interface Address {
  _id?: string;
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  phone: string;
  isDefault: boolean;
}

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
}

export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [user, setUser] = useState<UserProfile | null>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingAddress, setSavingAddress] = useState(false);

  // Profile Form State
  const [profileForm, setProfileForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Address Form State
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);
  const [addressForm, setAddressForm] = useState<Address>({
    firstName: "",
    lastName: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
    phone: "",
    isDefault: false,
  });

  // Toast notifications state
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/account/login");
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch User profile details
        const profileRes = await fetch("/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const profileData = await profileRes.json();
        
        if (profileRes.ok && profileData.success) {
          setUser(profileData.user);
          setProfileForm({
            name: profileData.user.name || "",
            email: profileData.user.email || "",
            phone: profileData.user.phone || "",
          });
        } else {
          showToast(profileData.error || "Failed to load user profile", "error");
          localStorage.removeItem("token");
          router.push("/account/login");
          return;
        }

        // Fetch User orders
        const ordersRes = await fetch("/api/orders", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const ordersData = await ordersRes.json();
        if (ordersRes.ok) {
          setOrders(ordersData.orders || []);
        }
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        showToast("Error loading account data", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/account/login");
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profileForm.name || !profileForm.email || !profileForm.phone) {
      showToast("Please fill all profile fields", "error");
      return;
    }

    setSavingProfile(true);
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profileForm),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setUser(data.user);
        showToast("Profile details updated successfully!");
      } else {
        showToast(data.error || "Failed to update profile", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Network error updating profile", "error");
    } finally {
      setSavingProfile(false);
    }
  };

  const resetAddressForm = () => {
    setAddressForm({
      firstName: "",
      lastName: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      country: "India",
      pincode: "",
      phone: "",
      isDefault: false,
    });
    setEditingAddressId(null);
  };

  const handleOpenAddAddress = () => {
    resetAddressForm();
    setShowAddressForm(true);
  };

  const handleOpenEditAddress = (addr: Address) => {
    setAddressForm({ ...addr });
    setEditingAddressId(addr._id || null);
    setShowAddressForm(true);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressForm({ ...addressForm, [e.target.name]: e.target.value });
  };

  const handleSaveAddress = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !addressForm.firstName ||
      !addressForm.lastName ||
      !addressForm.address1 ||
      !addressForm.city ||
      !addressForm.state ||
      !addressForm.pincode ||
      !addressForm.phone
    ) {
      showToast("Please fill in all required address fields (*)", "error");
      return;
    }

    setSavingAddress(true);
    const token = localStorage.getItem("token");
    let updatedAddresses = user ? [...user.addresses] : [];

    // Manage Default constraints
    if (addressForm.isDefault) {
      updatedAddresses = updatedAddresses.map((addr) => ({
        ...addr,
        isDefault: false,
      }));
    } else if (updatedAddresses.length === 0) {
      addressForm.isDefault = true;
    }

    if (editingAddressId) {
      updatedAddresses = updatedAddresses.map((addr) =>
        addr._id === editingAddressId ? { ...addressForm, _id: editingAddressId } : addr
      );
    } else {
      updatedAddresses.push({ ...addressForm });
    }

    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ addresses: updatedAddresses }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setUser(data.user);
        showToast(
          editingAddressId
            ? "Address updated successfully!"
            : "New address added successfully!"
        );
        setShowAddressForm(false);
        resetAddressForm();
      } else {
        showToast(data.error || "Failed to save address", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Network error saving address", "error");
    } finally {
      setSavingAddress(false);
    }
  };

  const handleDeleteAddress = async (addressId: string) => {
    if (!user) return;
    if (!confirm("Are you sure you want to delete this address?")) return;

    const token = localStorage.getItem("token");
    const targetAddr = user.addresses.find((addr) => addr._id === addressId);
    let updatedAddresses = user.addresses.filter((addr) => addr._id !== addressId);

    // If we deleted the default address and have others, make the first one default
    if (targetAddr?.isDefault && updatedAddresses.length > 0) {
      updatedAddresses[0].isDefault = true;
    }

    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ addresses: updatedAddresses }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setUser(data.user);
        showToast("Address deleted successfully!");
      } else {
        showToast(data.error || "Failed to delete address", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Network error deleting address", "error");
    }
  };

  const handleSetDefaultAddress = async (addressId: string) => {
    if (!user) return;
    const token = localStorage.getItem("token");
    const updatedAddresses = user.addresses.map((addr) => ({
      ...addr,
      isDefault: addr._id === addressId,
    }));

    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ addresses: updatedAddresses }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setUser(data.user);
        showToast("Default address updated!");
      } else {
        showToast(data.error || "Failed to update default address", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Network error updating default address", "error");
    }
  };

  // Compute Statistics for Overview Tab
  const totalSpent = orders.reduce((sum, order) => sum + (order.total || 0), 0);
  const defaultAddress = user?.addresses.find((addr) => addr.isDefault);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50/50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 font-medium animate-pulse">Loading dashboard details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/40 pb-20 pt-10 px-4 md:px-8 relative overflow-hidden">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-24 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-xl transition-all duration-300 border animate-slideUp ${
          toast.type === "success" 
            ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
            : "bg-rose-50 border-rose-200 text-rose-800"
        }`}>
          {toast.type === "success" ? <CheckCircle className="w-5 h-5 text-emerald-600" /> : <AlertCircle className="w-5 h-5 text-rose-600" />}
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-3xl p-6 w-full lg:w-64 flex-shrink-0 shadow-sm hover-lift duration-300">
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-inner">
              <UserIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Welcome back,</p>
              <h3 className="font-semibold text-gray-800 text-base line-clamp-1">{user?.name}</h3>
            </div>
          </div>

          <nav className="space-y-1">
            {[
              { key: "dashboard", label: "Overview", icon: Home },
              { key: "orders", label: "My Orders", icon: Package },
              { key: "address", label: "Saved Addresses", icon: MapPin },
              { key: "account", label: "Account Details", icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-2xl transition-all duration-300 text-sm font-medium ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 translate-x-1"
                      : "text-gray-600 hover:bg-blue-50/50 hover:text-blue-600"
                  }`}
                >
                  <Icon className="w-4.5 h-4.5" />
                  {tab.label}
                </button>
              );
            })}

            <div className="h-px bg-gray-100 my-4" />

            <button
              onClick={logout}
              className="flex items-center gap-3 w-full text-left px-4 py-3 text-red-500 hover:bg-red-50 rounded-2xl transition-all duration-300 text-sm font-medium"
            >
              <LogOut className="w-4.5 h-4.5" />
              Logout
            </button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          
          {/* 1. OVERVIEW TAB */}
          {activeTab === "dashboard" && (
            <div className="space-y-8 animate-fadeIn">
              {/* Welcome Card */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
                <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-indigo-500/20 blur-2xl pointer-events-none" />
                <p className="text-blue-100 text-xs font-semibold tracking-wider uppercase mb-1">Customer Dashboard</p>
                <h1 className="text-3xl font-bold mb-3">Hello, {user?.name}!</h1>
                <p className="text-blue-50/90 text-sm max-w-md font-light leading-relaxed">
                  Manage your sleep healthcare orders, shipping addresses, and contact settings from your premium control panel.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex items-center gap-4 hover-lift">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Total Orders</p>
                    <h4 className="text-2xl font-bold text-gray-800">{orders.length}</h4>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex items-center gap-4 hover-lift">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Total Spent</p>
                    <h4 className="text-2xl font-bold text-gray-800">₹{totalSpent.toLocaleString("en-IN")}</h4>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex items-center gap-4 hover-lift">
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Addresses</p>
                    <h4 className="text-2xl font-bold text-gray-800">{user?.addresses.length || 0}</h4>
                  </div>
                </div>
              </div>

              {/* Details Quick View */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Profile Snapshot */}
                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                    <h3 className="font-semibold text-gray-800 text-base">Account Summary</h3>
                    <button 
                      onClick={() => setActiveTab("account")} 
                      className="text-xs text-blue-600 hover:underline font-medium"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600 font-medium">Email:</span>
                      <span className="text-gray-800 break-all">{user?.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600 font-medium">Phone:</span>
                      <span className="text-gray-800">{user?.phone || "Not set"}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600 font-medium">Account Status:</span>
                      <span className="text-emerald-600 font-semibold flex items-center gap-1">
                        Active <Check className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Default Address Summary */}
                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                    <h3 className="font-semibold text-gray-800 text-base">Default Address</h3>
                    <button 
                      onClick={() => setActiveTab("address")} 
                      className="text-xs text-blue-600 hover:underline font-medium"
                    >
                      Manage
                    </button>
                  </div>
                  {defaultAddress ? (
                    <div className="text-sm text-gray-600 space-y-1">
                      <p className="font-semibold text-gray-800">
                        {defaultAddress.firstName} {defaultAddress.lastName}
                      </p>
                      {defaultAddress.company && <p className="text-xs text-gray-400">{defaultAddress.company}</p>}
                      <p>{defaultAddress.address1}</p>
                      {defaultAddress.address2 && <p>{defaultAddress.address2}</p>}
                      <p>{defaultAddress.city}, {defaultAddress.state} - {defaultAddress.pincode}</p>
                      <p className="text-xs text-gray-400 mt-2 font-mono">Phone: {defaultAddress.phone}</p>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-sm text-gray-400 italic">No default address saved yet.</p>
                      <button 
                        onClick={() => { setActiveTab("address"); handleOpenAddAddress(); }}
                        className="mt-3 text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-xl font-medium hover:bg-blue-100 transition"
                      >
                        Add Address
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* 2. ORDERS TAB */}
          {activeTab === "orders" && (
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Order History</h2>
                  <p className="text-xs text-gray-400 mt-0.5">Track and view receipts for all past purchases</p>
                </div>
                <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {orders.length} {orders.length === 1 ? "order" : "orders"}
                </span>
              </div>
              <OrdersPage />
            </div>
          )}

          {/* 3. SAVED ADDRESSES TAB */}
          {activeTab === "address" && (
            <div className="space-y-6 animate-fadeIn">
              {showAddressForm ? (
                // Address Add/Edit Form
                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {editingAddressId ? "Edit Saved Address" : "Add New Shipping Address"}
                    </h2>
                    <p className="text-xs text-gray-400 mt-0.5">Enter details exactly as they appear on your shipping ID</p>
                  </div>

                  <form onSubmit={handleSaveAddress} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-500 font-medium mb-1 block">First Name *</label>
                        <input
                          required
                          name="firstName"
                          value={addressForm.firstName}
                          onChange={handleAddressChange}
                          placeholder="e.g. Rahul"
                          className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 font-medium mb-1 block">Last Name *</label>
                        <input
                          required
                          name="lastName"
                          value={addressForm.lastName}
                          onChange={handleAddressChange}
                          placeholder="e.g. Sharma"
                          className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1 block">Company Name (Optional)</label>
                      <input
                        name="company"
                        value={addressForm.company}
                        onChange={handleAddressChange}
                        placeholder="e.g. Acme Health Corp"
                        className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1 block">Street Address *</label>
                      <input
                        required
                        name="address1"
                        value={addressForm.address1}
                        onChange={handleAddressChange}
                        placeholder="House no., Building, Street name"
                        className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1 block">Apartment, Suite, Unit, etc. (Optional)</label>
                      <input
                        name="address2"
                        value={addressForm.address2 || ""}
                        onChange={handleAddressChange}
                        placeholder="e.g. Floor 3, Flat 302"
                        className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs text-gray-500 font-medium mb-1 block">Town / City *</label>
                        <input
                          required
                          name="city"
                          value={addressForm.city}
                          onChange={handleAddressChange}
                          placeholder="e.g. Bhubaneswar"
                          className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 font-medium mb-1 block">State *</label>
                        <input
                          required
                          name="state"
                          value={addressForm.state}
                          onChange={handleAddressChange}
                          placeholder="e.g. Odisha"
                          className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 font-medium mb-1 block">PIN Code *</label>
                        <input
                          required
                          name="pincode"
                          value={addressForm.pincode}
                          onChange={handleAddressChange}
                          placeholder="e.g. 751024"
                          className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-500 font-medium mb-1 block">Phone Number *</label>
                        <input
                          required
                          name="phone"
                          value={addressForm.phone}
                          onChange={handleAddressChange}
                          placeholder="10-digit number"
                          className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 font-medium mb-1 block">Country</label>
                        <input
                          readOnly
                          value="India"
                          className="w-full border border-gray-100 bg-gray-100 p-3 rounded-2xl text-sm text-gray-500 cursor-not-allowed"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <input
                        type="checkbox"
                        id="isDefault"
                        name="isDefault"
                        checked={addressForm.isDefault}
                        onChange={(e) => setAddressForm({ ...addressForm, isDefault: e.target.checked })}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-4 w-4"
                      />
                      <label htmlFor="isDefault" className="text-sm text-gray-600 font-medium cursor-pointer">
                        Set as default shipping address
                      </label>
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-gray-100">
                      <button
                        type="submit"
                        disabled={savingAddress}
                        className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-blue-700 hover:shadow-md transition disabled:bg-blue-400"
                      >
                        {savingAddress ? "Saving Address..." : "Save Address"}
                      </button>
                      <button
                        type="button"
                        onClick={() => { setShowAddressForm(false); resetAddressForm(); }}
                        className="bg-gray-100 text-gray-600 px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-gray-200 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                // Addresses Listing
                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">Saved Addresses</h2>
                      <p className="text-xs text-gray-400 mt-0.5">Manage billing and delivery address destinations</p>
                    </div>
                    <button
                      onClick={handleOpenAddAddress}
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <Plus className="w-4 h-4" /> Add Address
                    </button>
                  </div>

                  {!user?.addresses || user.addresses.length === 0 ? (
                    <div className="text-center py-16">
                      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-4">
                        <MapPin className="w-8 h-8" />
                      </div>
                      <h3 className="text-base font-semibold text-gray-700 mb-1">No addresses saved yet</h3>
                      <p className="text-sm text-gray-400 max-w-xs mx-auto mb-6">Create saved addresses to fast-track your checkout and order processes.</p>
                      <button
                        onClick={handleOpenAddAddress}
                        className="bg-blue-50 text-blue-600 px-5 py-2.5 rounded-2xl text-sm font-semibold hover:bg-blue-100 transition"
                      >
                        Add Your First Address
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {user.addresses.map((addr) => (
                        <div
                          key={addr._id}
                          className={`border rounded-3xl p-6 flex flex-col justify-between hover-lift transition-all duration-300 relative ${
                            addr.isDefault 
                              ? "border-blue-600 bg-blue-50/5/30" 
                              : "border-gray-100 bg-white"
                          }`}
                        >
                          {addr.isDefault && (
                            <span className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                              Default
                            </span>
                          )}

                          <div className="space-y-2">
                            <p className="font-semibold text-gray-800 text-base flex items-center gap-2">
                              <Home className="w-4 h-4 text-gray-400" />
                              {addr.firstName} {addr.lastName}
                            </p>
                            {addr.company && (
                              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{addr.company}</p>
                            )}
                            <div className="text-sm text-gray-600 space-y-0.5 font-light">
                              <p>{addr.address1}</p>
                              {addr.address2 && <p>{addr.address2}</p>}
                              <p>{addr.city}, {addr.state} - {addr.pincode}</p>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400 font-mono pt-2">
                              <Phone className="w-3.5 h-3.5" /> {addr.phone}
                            </div>
                          </div>

                          <div className="flex items-center gap-4 border-t border-gray-100 pt-4 mt-6">
                            <button
                              onClick={() => handleOpenEditAddress(addr)}
                              className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 font-semibold transition"
                            >
                              <Edit2 className="w-3.5 h-3.5" /> Edit
                            </button>
                            <button
                              onClick={() => addr._id && handleDeleteAddress(addr._id)}
                              className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500 font-semibold transition"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> Delete
                            </button>
                            {!addr.isDefault && (
                              <button
                                onClick={() => addr._id && handleSetDefaultAddress(addr._id)}
                                className="ml-auto text-xs text-blue-600 hover:underline font-semibold transition"
                              >
                                Set as Default
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* 4. ACCOUNT DETAILS TAB */}
          {activeTab === "account" && (
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-6 animate-fadeIn">
              <div className="pb-3 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-800">Account Details</h2>
                <p className="text-xs text-gray-400 mt-0.5">Manage your profile details and preferences</p>
              </div>

              <form onSubmit={handleUpdateProfile} className="space-y-5">
                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1 block">Full Name</label>
                  <div className="relative">
                    <UserIcon className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
                    <input
                      required
                      placeholder="Your Name"
                      value={profileForm.name}
                      onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
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
                      type="email"
                      placeholder="Your Email"
                      value={profileForm.email}
                      onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
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
                      placeholder="Your Phone Number"
                      value={profileForm.phone}
                      onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                      className="w-full border border-gray-100 bg-gray-50/50 pl-11 pr-4 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={savingProfile}
                    className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-blue-700 hover:shadow-md transition-all duration-300 disabled:bg-blue-400"
                  >
                    {savingProfile ? "Saving Details..." : "Save Changes"}
                  </button>
                </div>
              </form>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}