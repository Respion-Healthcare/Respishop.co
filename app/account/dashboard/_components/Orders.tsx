"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Package, Calendar, CreditCard, ChevronRight, CheckCircle, Clock, Truck } from "lucide-react";

interface OrderItem {
  _id: string;
  productId: string;
  name: string;
  quantity: number;
  price: number;
  size: string;
}

interface Order {
  _id: string;
  items: OrderItem[];
  total: number;
  paymentMethod: string;
  status: string;
  createdAt: string;
}

interface OrdersPageProps {
  orders?: Order[];
  loading?: boolean;
}

export default function OrdersPage({ orders: propOrders, loading: propLoading }: OrdersPageProps) {
  const [orders, setOrders] = useState<Order[]>(propOrders || []);
  const [loading, setLoading] = useState(propLoading !== undefined ? propLoading : !propOrders);
  const router = useRouter();

  useEffect(() => {
    if (propOrders !== undefined) {
      setOrders(propOrders);
      setLoading(propLoading !== undefined ? propLoading : false);
      return;
    }

    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/account/login");
        return;
      }
      try {
        const res = await fetch("/api/orders", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) setOrders(data.orders);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [propOrders, propLoading, router]);

  if (loading) {
    return (
      <div className="py-12 flex flex-col items-center justify-center bg-white rounded-3xl border border-gray-100">
        <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mb-3" />
        <p className="text-sm text-gray-400">Loading order history...</p>
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="py-16 text-center bg-white rounded-3xl border border-gray-100">
        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-4">
          <Package className="w-8 h-8" />
        </div>
        <h3 className="text-base font-semibold text-gray-700 mb-1">No orders found</h3>
        <p className="text-sm text-gray-400 max-w-xs mx-auto">Your order history will appear here once you place your first order.</p>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return {
          bg: "bg-emerald-50 text-emerald-700 border-emerald-100",
          icon: <CheckCircle className="w-3.5 h-3.5" />,
          label: "Delivered"
        };
      case "processing":
      case "pending":
        return {
          bg: "bg-amber-50 text-amber-700 border-amber-100",
          icon: <Clock className="w-3.5 h-3.5" />,
          label: "Processing"
        };
      case "shipped":
        return {
          bg: "bg-blue-50 text-blue-700 border-blue-100",
          icon: <Truck className="w-3.5 h-3.5" />,
          label: "Shipped"
        };
      default:
        return {
          bg: "bg-gray-50 text-gray-700 border-gray-100",
          icon: <Package className="w-3.5 h-3.5" />,
          label: status
        };
    }
  };

  return (
    <div className="space-y-6">
      {orders.map((order) => {
        const badge = getStatusBadge(order.status);
        return (
          <div
            key={order._id}
            className="bg-white border border-gray-100 rounded-3xl p-6 hover-lift transition-all duration-300 shadow-sm"
          >
            {/* Order Meta Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-50">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg uppercase">
                    #{order._id.slice(-8).toUpperCase()}
                  </span>
                  <span className={`flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${badge.bg}`}>
                    {badge.icon} {badge.label}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>
                    Ordered on{" "}
                    {new Date(order.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              <div className="text-right sm:text-right">
                <p className="text-xs text-gray-400 font-medium">Total Amount</p>
                <p className="text-xl font-extrabold text-gray-900">
                  ₹{order.total.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            {/* Items List */}
            <div className="divide-y divide-gray-50 py-2">
              {order.items.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between py-3.5 text-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100 flex-shrink-0">
                      <Package className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 line-clamp-1">{item.name}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-400 font-medium mt-0.5">
                        <span>Qty: {item.quantity}</span>
                        {item.size && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <span>Size: {item.size}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right pl-4">
                    <p className="font-semibold text-gray-800">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                    <p className="text-[11px] text-gray-400">₹{item.price} each</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Row */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-50 text-xs mt-2">
              <span className="flex items-center gap-1 text-gray-400 font-medium">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Paid via {order.paymentMethod === "cod" ? "Cash on Delivery" : order.paymentMethod.toUpperCase()}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}