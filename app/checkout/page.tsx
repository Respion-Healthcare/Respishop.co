"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { 
  MapPin, 
  ShoppingBag, 
  CreditCard, 
  CheckCircle, 
  ArrowRight, 
  Loader2, 
  AlertCircle,
  ShoppingCart,
  User,
  Mail,
  Phone,
  Building,
  Home
} from "lucide-react";

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

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    state: "Odisha",
    pincode: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [savedAddresses, setSavedAddresses] = useState<Address[]>([]);
  const [payment, setPayment] = useState("cod");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // State for success screen
  const [placedOrderDetails, setPlacedOrderDetails] = useState<{
    orderId: string;
    total: number;
    paymentMethod: string;
  } | null>(null);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
      return;
    }
    setIsLoggedIn(true);

    // Fetch user details and addresses
    const fetchUserData = async () => {
      try {
        const res = await fetch("/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok && data.success) {
          const user = data.user;
          setSavedAddresses(user.addresses || []);

          // Auto-populate with default address or basic details
          const defaultAddr = user.addresses.find((addr: Address) => addr.isDefault);
          if (defaultAddr) {
            setForm({
              firstName: defaultAddr.firstName || "",
              lastName: defaultAddr.lastName || "",
              company: defaultAddr.company || "",
              address1: defaultAddr.address1 || "",
              address2: defaultAddr.address2 || "",
              city: defaultAddr.city || "",
              state: defaultAddr.state || "Odisha",
              pincode: defaultAddr.pincode || "",
              phone: defaultAddr.phone || user.phone || "",
              email: user.email || "",
              notes: "",
            });
          } else {
            // Populate user basic details
            const nameParts = (user.name || "").split(" ");
            const fName = nameParts[0] || "";
            const lName = nameParts.slice(1).join(" ") || "";
            setForm(prev => ({
              ...prev,
              firstName: fName,
              lastName: lName,
              email: user.email || "",
              phone: user.phone || "",
            }));
          }
        }
      } catch (err) {
        console.error("Error loading user info in checkout:", err);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectSavedAddress = (addr: Address) => {
    setForm({
      firstName: addr.firstName,
      lastName: addr.lastName,
      company: addr.company || "",
      address1: addr.address1,
      address2: addr.company || addr.address2 || "",
      city: addr.city,
      state: addr.state || "Odisha",
      pincode: addr.pincode,
      phone: addr.phone,
      email: form.email, // keep current email
      notes: form.notes,
    });
  };

  const placeOrder = async () => {
    if (!agree) {
      alert("Please accept website terms & conditions");
      return;
    }

    if (!form.firstName || !form.lastName || !form.address1 || !form.city || !form.state || !form.pincode || !form.phone || !form.email) {
      alert("Please fill in all required billing details (*)");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to place an order");
      router.push("/account/login");
      return;
    }

    // Verify items exist
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items to checkout.");
      return;
    }

    const orderData = {
      items: cart.map(item => ({
        productId: String(item.id),
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        size: item.size || "Standard", // Default size if not selected
      })),
      total,
      address: {
        firstName: form.firstName,
        lastName: form.lastName,
        company: form.company,
        address1: form.address1,
        address2: form.address2,
        city: form.city,
        state: form.state,
        country: "India",
        pincode: form.pincode,
        phone: form.phone,
      },
      paymentMethod: payment,
      notes: form.notes,
    };

    setLoading(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        clearCart(); // Exposes standard state clear
        setPlacedOrderDetails({
          orderId: data.orderId,
          total,
          paymentMethod: payment,
        });
      } else {
        alert(data.error || "Failed to place order");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong placing the order");
    } finally {
      setLoading(false);
    }
  };

  // SUCCESS SCREEN RENDER
  if (placedOrderDetails) {
    return (
      <div className="min-h-screen bg-gray-50/50 flex items-center justify-center pt-24 pb-12 px-4">
        <div className="w-full max-w-xl bg-white border border-gray-100 rounded-3xl shadow-xl p-8 text-center space-y-6 animate-fadeIn">
          <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Order Placed Successfully!</h1>
            <p className="text-gray-500 text-sm">Thank you for shopping with Respishop. Your order has been registered.</p>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-left space-y-4">
            <div className="flex justify-between items-center text-sm border-b border-gray-200/60 pb-3">
              <span className="text-gray-400 font-medium">Order Reference:</span>
              <span className="font-mono font-bold text-gray-800 uppercase bg-white border px-2.5 py-1 rounded-md text-xs">
                #{placedOrderDetails.orderId.slice(-8).toUpperCase()}
              </span>
            </div>
            
            <div className="flex justify-between items-center text-sm border-b border-gray-200/60 pb-3">
              <span className="text-gray-400 font-medium">Payment Method:</span>
              <span className="font-semibold text-gray-700 capitalize">
                {placedOrderDetails.paymentMethod === "cod" ? "Cash on Delivery" : placedOrderDetails.paymentMethod}
              </span>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400 font-medium">Total Amount Paid:</span>
              <span className="text-lg font-bold text-gray-900">
                ₹{placedOrderDetails.total.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => router.push("/account/dashboard")}
              className="flex-1 bg-[#0391B6] hover:bg-[#027A99] text-white font-semibold py-3.5 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              Go to Dashboard <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => router.push("/products")}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3.5 px-6 rounded-2xl transition text-sm"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  // CART EMPTY FALLBACK
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50/30 flex items-center justify-center pt-24 px-4">
        <div className="text-center max-w-sm space-y-6">
          <div className="w-20 h-20 rounded-full bg-[#EAF8FC] text-[#0391B6] flex items-center justify-center mx-auto">
            <ShoppingCart className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Your Cart is Empty</h2>
            <p className="text-sm text-gray-400 mt-1">Please add medical equipment or accessories to your cart before checking out.</p>
          </div>
          <button
            onClick={() => router.push("/products")}
            className="w-full bg-[#0391B6] hover:bg-[#027A99] text-white font-semibold py-3.5 px-6 rounded-2xl shadow-md transition text-sm"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-[#0391B6] font-bold mb-1">Secure Checkout</p>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Complete Your Order</h1>
        </div>

        {!isLoggedIn && (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-2xl mb-6 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>You are checking out as guest. Register or sign in to save details and track order history.</span>
            </div>
            <button 
              onClick={() => router.push("/account/login")}
              className="text-xs font-bold text-amber-900 bg-amber-200/50 hover:bg-amber-200 px-3.5 py-1.5 rounded-xl transition"
            >
              Sign In
            </button>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT SIDE: FORM & ADDRESSES */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Quick Saved Address Picker */}
            {isLoggedIn && savedAddresses.length > 0 && (
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-800 mb-3.5 flex items-center gap-1.5 border-b border-gray-50 pb-2.5">
                  <MapPin className="w-4.5 h-4.5 text-[#0391B6]" />
                  Select Saved Shipping Address
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {savedAddresses.map((addr) => (
                    <button
                      key={addr._id}
                      type="button"
                      onClick={() => handleSelectSavedAddress(addr)}
                      className="text-left p-4 rounded-2xl border border-gray-100 bg-gray-50/20 hover:border-blue-500 hover:bg-[#EAF8FC]/10 hover:shadow-sm transition-all duration-300 space-y-1.5 relative group"
                    >
                      <div className="flex items-center justify-between font-semibold text-sm text-gray-800">
                        <span className="flex items-center gap-1">
                          <Home className="w-3.5 h-3.5 text-gray-400" />
                          {addr.firstName} {addr.lastName}
                        </span>
                        {addr.isDefault && (
                          <span className="bg-[#0391B6] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md uppercase">Default</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-1">{addr.address1}</p>
                      <p className="text-[11px] text-gray-400">{addr.city}, {addr.state} - {addr.pincode}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Billing Details */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-gray-800 border-b border-gray-50 pb-2.5">Billing &amp; Shipping Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="text-xs text-gray-400 mb-1 block">First Name *</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First name *"
                    className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Last Name *</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last name *"
                    className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs text-gray-400 mb-1 block">Company Name (Optional)</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name (optional)"
                    className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs text-gray-400 mb-1 block">Country</label>
                  <input value="India" readOnly className="w-full border border-gray-100 bg-gray-100 p-3 rounded-2xl text-sm text-gray-500 cursor-not-allowed" />
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs text-gray-400 mb-1 block">Street Address *</label>
                  <input
                    name="address1"
                    value={form.address1}
                    onChange={handleChange}
                    placeholder="House number and street name *"
                    className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="text-xs text-gray-400 mb-1 block">Apartment, Suite, Unit, etc. (Optional)</label>
                  <input
                    name="address2"
                    value={form.address2}
                    onChange={handleChange}
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Town / City *</label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Town / City *"
                    className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>
                
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">State *</label>
                  <input
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    placeholder="State *"
                    className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-400 mb-1 block">PIN Code *</label>
                  <input
                    name="pincode"
                    value={form.pincode}
                    onChange={handleChange}
                    placeholder="PIN Code *"
                    className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>
                
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Phone Number *</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone *"
                    className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs text-gray-400 mb-1 block">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email address *"
                    className="w-full border border-gray-100 bg-gray-50/50 p-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Additional Info */}
              <div className="pt-4 border-t border-gray-50">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Additional Information</h3>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Order notes (optional), e.g. special instructions for delivery."
                  className="w-full border border-gray-100 bg-gray-50/50 p-3.5 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition min-h-[90px]"
                />
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-gray-800 border-b border-gray-50 pb-2">Payment Option</h2>
              
              <div className="p-4 bg-gray-50/50 rounded-2xl border border-gray-100">
                <label className="flex items-center gap-3 font-semibold text-gray-700 text-sm cursor-pointer">
                  <input
                    type="radio"
                    checked={payment === "cod"}
                    onChange={() => setPayment("cod")}
                    className="rounded-full border-gray-300 text-[#0391B6] focus:ring-blue-500 h-4.5 w-4.5"
                  />
                  Cash on Delivery
                </label>
                <p className="text-xs text-gray-400 mt-1 pl-7 font-light">Pay with cash upon delivery of your medical equipment package.</p>
              </div>

              <div className="flex items-start gap-2.5 pt-3">
                <input
                  type="checkbox"
                  id="agree"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="rounded border-gray-300 text-[#0391B6] focus:ring-blue-500 h-4.5 w-4.5 mt-0.5"
                />
                <label htmlFor="agree" className="text-xs text-gray-500 leading-normal cursor-pointer font-light">
                  I have read and agree to the website <span className="text-[#0391B6] hover:underline">terms and conditions</span> *
                </label>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: ORDER SUMMARY */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm h-fit sticky top-28 space-y-6">
              <h2 className="text-lg font-bold text-gray-800 border-b border-gray-50 pb-2 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#0391B6]" />
                Order Summary
              </h2>
              
              <div className="divide-y divide-gray-50">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-3 text-sm">
                    <div className="max-w-[70%]">
                      <p className="font-semibold text-gray-700 line-clamp-1">{item.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Qty: {item.quantity} {item.size && `| Size: ${item.size}`}
                      </p>
                    </div>
                    <span className="font-semibold text-gray-800">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                <span className="font-semibold text-gray-500">Shipping</span>
                <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">FREE</span>
              </div>

              <div className="border-t border-gray-100 pt-4 flex justify-between items-baseline">
                <span className="font-bold text-gray-800 text-base">Total</span>
                <span className="text-2xl font-extrabold text-[#0391B6]">
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>

              <button
                onClick={placeOrder}
                disabled={loading}
                className="w-full bg-[#0391B6] hover:bg-[#027A99] hover:shadow-lg text-white font-semibold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 disabled:bg-blue-400 text-sm shadow-md"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Placing Order...
                  </>
                ) : (
                  <>
                    Place Order <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}