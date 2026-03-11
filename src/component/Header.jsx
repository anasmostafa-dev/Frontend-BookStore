import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../auth/AuthContext";
import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../auth/CartContext";
import toast from "react-hot-toast";
function Header() {
  const { user, logout, isAuthenticated, isAdmin } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "#books" },
    { name: "Contact", path: "#footer" },
    { name: "About", path: "#footer" },
  ];

  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully", { icon: "👋" });
    navigate("/");
    <div class="bg-white inline-flex space-x-3 p-3 text-sm rounded border border-gray-200">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 8.31V9a7.5 7.5 0 1 1-4.447-6.855M16.5 3 9 10.508l-2.25-2.25"
          stroke="#22C55E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div>
        <h3 class="text-slate-700 font-medium">Successfully saved!</h3>
        <p class="text-slate-500">Anyone with a link can now view this file.</p>
      </div>
      <button
        type="button"
        aria-label="close"
        class="cursor-pointer mb-auto text-slate-400 hover:text-slate-600 active:scale-95 transition"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="12.532"
            width="17.498"
            height="2.1"
            rx="1.05"
            transform="rotate(-45.74 0 12.532)"
            fill="currentColor"
            fill-opacity=".7"
          />
          <rect
            x="12.531"
            y="13.914"
            width="17.498"
            height="2.1"
            rx="1.05"
            transform="rotate(-135.74 12.531 13.914)"
            fill="currentColor"
            fill-opacity=".7"
          />
        </svg>
      </button>
    </div>;
  };

  const renderUserActions = () => {
    if (!isAuthenticated) {
      return (
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </button>
        </div>
      );
    }
    return (
      <div className="hidden md:flex items-center gap-4">
        <span className="text-[15px] text-gray-700 font-sans font-extrabold">
          Welcome, <span className="text-sm text-logo-gold">{user?.name}</span>
        </span>

        {isAdmin ? (
          <button
            onClick={() => {
              navigate("/admin");
            }}
          >
            Manage Dashboard
          </button>
        ) : (
          <>
            <div className="relative">
              <Link to={"/cart"}>
                {cart && cart.totalItems > 0 && (
                  <div className="absolute -top-2 -right-1 bg-red-500 text-white text-xs rounded-full px-2 ">
                    {cart.totalItems}
                  </div>
                )}
                <ShoppingBag className="cursor-pointer" />
              </Link>
            </div>
          </>
        )}
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };

  return (
    <>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[60%] h-32 bg-logo-gold/35 brightness-110 blur-[50px] z-30 pointer-events-none" />
      <nav
        id="header"
        className="fixed top-0 left-0 h-20 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 py-4 md:py-5 z-50 bg-black/10 backdrop-blur-md"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img className="h-14 object-contain" src="/logo.png" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className={"group flex flex-col gap-0.5 text-sm "}
            >
              {link.name}
              <div className="bg-gray-700 h-0.5 w-0 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
        {renderUserActions()}

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <svg
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-6 w-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-gray-200 backdrop-blur-2xl text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <a
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </a>

          {navLinks.map((link, i) => (
            <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}

          <hr className="w-1/2 border-gray-600" />

          {!isAuthenticated ? (
            <div className="flex flex-col gap-4 w-1/2">
              <button
                className="w-full py-3 border border-gray-300 rounded-xl"
                onClick={() => {
                  navigate("/login");
                  setIsMenuOpen(false);
                }}
              >
                Login
              </button>
              <button
                className="w-full py-3 bg-slate-900 text-white rounded-xl"
                onClick={() => {
                  navigate("/signup");
                  setIsMenuOpen(false);
                }}
              >
                Signup
              </button>
            </div>
          ) : (
            <button
              className="text-red-500 font-bold text-xl"
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
            >
              Logout
            </button>
          )}
          {isAdmin ? (
            <button
              onClick={() => {
                navigate("/admin");
              }}
            >
              Manage Dashboard
            </button>
          ) : (
            <>
              <div className="relative">
                <Link to={"/cart"} onClick={() => setIsMenuOpen(false)}>
                  {cart && cart.totalItems > 0 && (
                    <div className="absolute -top-2 -right-1 bg-red-500 text-white text-xs rounded-full px-2 ">
                      {cart.totalItems}
                    </div>
                  )}
                  <ShoppingBag className="cursor-pointer" />
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
