// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         router.push("/account/login");
//         return;
//       }

//       try {
//         const res = await fetch("/api/orders", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const data = await res.json();
//         if (res.ok) setOrders(data.orders);
//         else alert(data.error || "Failed to fetch orders");
//       } catch (err) {
//         console.error(err);
//         alert("Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [router]);

//   if (loading) return <p className="text-center mt-20">Loading orders...</p>;
//   if (!orders.length) return <p className="text-center mt-20">No orders found.</p>;

//   return (
//     <div className="min-h-screen bg-gray-50 pt-28 px-4">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-semibold mb-6">My Orders</h1>

//         {orders.map((order) => (
//           <div key={order._id} className="bg-white p-6 rounded-xl shadow-sm mb-4">
//             {/* User Info */}
//             <div className="mb-3 border-b pb-2">
//               <p><span className="font-semibold">Name:</span> {order.user.name}</p>
//               <p><span className="font-semibold">Email:</span> {order.user.email}</p>
//               <p><span className="font-semibold">Phone:</span> {order.user.phone}</p>
//             </div>

//             {/* Order Info */}
//             <div className="flex justify-between mb-2">
//               <span className="font-semibold">Order ID: {order._id}</span>
//               <span className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleString()}</span>
//             </div>
//             <div className="mb-2">
//               <span className="font-medium">Status:</span>{" "}
//               <span className={order.status === "Processing" ? "text-orange-600" : "text-green-600"}>
//                 {order.status}
//               </span>
//             </div>
//             <div className="mb-2">
//               <span className="font-medium">Payment:</span> {order.paymentMethod}
//             </div>

//             {/* Items */}
//             <div className="mt-2">
//               <span className="font-medium">Items:</span>
//               <ul className="list-disc pl-6">
//                 {order.items.map((item: any) => (
//                   <li key={item._id}>
//                     {item.name} × {item.quantity} - ₹{item.price * item.quantity}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="flex justify-between font-semibold mt-2">
//               <span>Total:</span>
//               <span>₹{order.total.toLocaleString()}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
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
        else alert(data.error || "Failed to fetch orders");
      } catch (err) {
        console.error(err);
        alert("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [router]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-3">
          <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-gray-400 tracking-wide">Loading orders…</p>
        </div>
      </div>
    );

  if (!orders.length)
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-4xl mb-3">📦</p>
          <p className="text-gray-500 text-sm">No orders yet.</p>
        </div>
      </div>
    );

  const statusStyle = (status: string) =>
    status === "Processing"
      ? "bg-amber-50 text-amber-700 border border-amber-200"
      : "bg-emerald-50 text-emerald-700 border border-emerald-200";

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Account</p>
          <h1 className="text-2xl font-semibold text-gray-900">Orders</h1>
        </div>

        {/* Order Cards */}
        <div className="flex flex-col gap-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-2 mb-4">
                <div>
                  <p className="text-[11px] text-gray-400 font-mono mb-0.5">
                    #{order._id.slice(-8).toUpperCase()}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(order.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <span
                  className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${statusStyle(order.status)}`}
                >
                  {order.status}
                </span>
              </div>

              {/* Items */}
              <div className="divide-y divide-gray-50 mb-4">
                {order.items.map((item: any) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center py-2 text-sm"
                  >
                    <span className="text-gray-700">
                      {item.name}
                      <span className="text-gray-400 ml-1">× {item.quantity}</span>
                    </span>
                    <span className="text-gray-600 font-medium">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-400">{order.paymentMethod}</span>
                <span className="text-sm font-semibold text-gray-900">
                  ₹{order.total.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}