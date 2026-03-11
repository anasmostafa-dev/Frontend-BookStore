import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ShoppingBag, ArrowRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const OrderSuccess = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle size={60} className="text-green-500" />
          </div>
        </div>

        <h1 className="text-3xl font-black text-slate-900 mb-2">
          Order Confirmed!
        </h1>
        <p className="text-gray-500 mb-8">
          Thank you for your purchase. Your books are being prepared for
          shipping and will arrive soon.
        </p>

        <div className="space-y-4">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all"
          >
            <ShoppingBag size={20} />
            Continue Shopping
          </Link>

          <Link
            to="/my-orders" 
            className="flex items-center justify-center gap-2 w-full bg-gray-100 text-slate-700 font-bold py-4 rounded-xl hover:bg-gray-200 transition-all"
          >
            View My Orders
            <ArrowRight size={18} />
          </Link>
        </div>

        <p className="mt-8 text-xs text-gray-400">
          A confirmation email has been sent to your registered address.
        </p>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;
