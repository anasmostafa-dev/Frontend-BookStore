import { useCart } from "../auth/CartContext";
import { ArrowBigRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SecurityIcon from "@mui/icons-material/Security";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

const CartPage = () => {
  const { cart, updateCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (!cart || cart.items.length === 0) {
    return (
      <div className="min-h-screen  flex flex-col gap-6 items-center justify-center text-center px-4">
        <h3 className="text-3xl! font-extrabold! text-slate-800">
          Your Cart Is Empty
        </h3>
        <p className="text-gray-500 max-w-md">
          Looks like you haven't added anything to your cart yet. Start
          exploring our products!
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-8! py-3! bg-logo-gold! rounded-2xl! flex! items-center! justify-center! font-extrabold! gap-2 hover:bg-amber-500! transition-all"
        >
          Start Shopping <ArrowBigRight />
        </button>
      </div>
    );
  }
  return (
    <div className="min-h-screen max-w-6xl mx-auto p-10">
      <h3 className="mt-5 font-extrabold!">Shopping Cart</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4 mt-20">
          {cart?.items
            ?.filter((item) => item.book)
            .map((item) => {
              return (
                <div
                  key={item.book._id}
                  className="flex flex-col sm:flex-row md:flex-row justify-between items-center border border-gray-200 gap-4 shadow-xl rounded-2xl p-7"
                >
                  <div className="flex gap-4">
                    <img
                      src={item?.book?.coverImage}
                      className="rounded w-28 h-32 object-cover"
                    />
                    <div className="flex flex-col gap-2">
                      <h2 className="font-bold!">{item?.book?.title}</h2>
                      <p className="text-logo-gold bg-amber-50 rounded-3xl font-bold font-sans px-1 py-1.5 text-[12px] text-center">
                        {item?.book?.author}
                      </p>
                      <p className="text-logo-gold font-bold">
                        {item?.book?.price} EGP
                      </p>
                    </div>
                  </div>

                  <div className="flex-col sm:flex md:flex-row gap-5 items-center">
                    <div className="flex border border-gray-300 bg-gray-50 rounded-2xl p-2 items-center gap-2 mt-2">
                      <button
                        className="disabled:opacity-60 px-4! py-2!"
                        disabled={item.quantity <= 1}
                        onClick={() =>
                          updateCart({
                            bookId: item.book._id,
                            quantity: item.quantity - 1,
                          })
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="disabled:opacity-60 px-4! py-2!"
                        onClick={() =>
                          updateCart({
                            bookId: item.book._id,
                            quantity: item.quantity + 1,
                          })
                        }
                      >
                        +
                      </button>
                    </div>

                    <div className="mt-2 text-center sm:text-right md:text-right font-extrabold text-black">
                      <p className="md:text-right">
                        <span className="text-xs text-gray-400 tracking-widest">
                          TOTAL
                        </span>
                        <br /> {(item?.book?.price * item?.quantity).toFixed(2)}{" "}
                        EGP
                      </p>

                      <button
                        className="px-2! py-2! bg-red-100! text-red-600! mt-3 hover:bg-red-500! hover:scale-105 hover:text-white! duration-500!"
                        onClick={() => removeFromCart(item.book._id)}
                      >
                        <DeleteForeverIcon />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="bg-white rounded-xl shadow-2xl h-fit mt-20">
          <h2 className="text-xl font-bold mb-4 w-full bg-slate-900 text-white text-center p-4 rounded-t-xl">
            Order Summary
          </h2>

          <div className="p-3">
            <div className="flex justify-between mb-2">
              <span>Items</span>
              <span>{cart.totalItems || 0}</span>
            </div>

            <div className="flex justify-between font-medium text-gray-600 text-md border-t pt-4">
              <span>Subtotal</span>
              <span className="font-extrabold text-black">
                {cart?.totalAmount?.toFixed(2) || "0.00"}{" "}
                <sub className="text-[10px]  text-gray-500">EGP</sub>
              </span>
            </div>

            <div>
              <div className="flex justify-between font-medium text-gray-600 text-md py-4 border-b">
                <span>Shipping</span>
                <span className="flex items-center gap-3">
                  <span className="text-[14px] text-red-400 line-through decoration-red-500/70">
                    100 EGP
                  </span>
                  <p className="text-green-600 font-bold">FREE</p>
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-between font-bold text-lg pt-4">
                <span className="text-[14px] text-gray-500">TOTAL AMOUNT</span>
                <span className="font-black text-[24px]">
                  {cart?.totalAmount?.toFixed(2) || "0.00"}{" "}
                  <sub className="text-[10px]  text-gray-500">EGP</sub>
                </span>
              </div>
              <p className="text-green-500 font-bold text-[10px]">
                You Saved 100 EGP
              </p>
            </div>

            <button
              onClick={() => {
                navigate("/checkout");
              }}
              className="w-full! mt-8! my-5 bg-logo-gold! py-3! rounded-xl! font-bold! flex items-center gap-2 justify-center hover:bg-amber-500! transition-all!"
            >
              <SecurityIcon /> Secure Checkout
            </button>
            <div className="flex justify-between text-gray-500 mt-10">
              <p className="text-[10px] flex items-center gap-1">
                <VerifiedUserIcon fontSize="small" className="text-logo-gold" />
                Secure Payment
              </p>
              <p className="text-[10px] flex items-center gap-1">
                <PublishedWithChangesIcon
                  fontSize="small"
                  className="text-logo-gold"
                />
                Easy Returns
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
