import { BookOpen, Home, Menu, PlusCircle, X } from "lucide-react";
import { useState } from "react";
import { useLocation, NavLink, Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboardHome = location.pathname === "/admin";
  return (
    <div className="min-h-screen bg-slate-200 text-slate-900">
      <header className=" gap-5 flex items-center justify-between pr-4 top-0 z-300 shadow-lg h-14 backdrop-blur-md">
        <button
          className="md:hidden bg-transparent! border-none!  text-black inline-flex items-center justify-center rounded-md border border-slate-200 p-2"
          onClick={() => {
            setOpen(true);
          }}
          aria-label="Open sidebar"
        >
          <Menu className="h-5 w-5 text-black" />
        </button>
        <h4 className="font-bold ml-3">Admin Dashboard</h4>
      </header>

      {/* SideBar */}
      <div className="flex flex-1 relative overflow-hidden">
        <aside
          className={` h-screen
            fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-100 transition-transform duration-300 ease-in-out
            md:relative md:translate-x-0 
            ${open ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <a
            className="md:hidden absolute right-2 cursor-pointer top-2 bg-transparent! text-white! rounded-md p-2"
            onClick={() => {
              setOpen(false);
            }}
            aria-label="Close Sidebar"
          >
            <X className="h-5 w-5" />
          </a>
          <nav className="flex-1 space-y-1 p-3">
            <NavLink
              onClick={() => {
                setOpen(false);
              }}
              to="/admin/all-books"
            >
              <div className="flex items-center gap-5 mt-5">
                <BookOpen className="h-5 w-5" />
                <span>See All Books</span>
              </div>
            </NavLink>
            <NavLink
              onClick={() => {
                setOpen(false);
              }}
              to="/admin/add-book"
            >
              <div className="flex items-center gap-5 mt-5">
                <PlusCircle className="h-5 w-5" />
                <span>Add Book</span>
              </div>
            </NavLink>

            <NavLink
              onClick={() => {
                setOpen(false);
              }}
              to="/"
            >
              <div className="flex items-center gap-5 mt-5">
                <Home className="h-5 w-5" />
                <span>Return To Home Page</span>
              </div>
            </NavLink>
          </nav>
        </aside>

        {open && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        <main className="flex-1 p-4 md:p-8 overflow-y-auto h-full">
          {isDashboardHome ? (
            <div className="flex font-sans flex-col justify-center gap-5 mt-20 items-center text-center w-full">
              <h1 className="font-extrabold text-xl md:text-5xl text-center  text-slate-900  ">
                Welocme <span className="text-logo-gold">Admin </span>To Your
                dashboard
              </h1>
              <p className="bg-linear-to-r from-slate-900 via-slate-900 to-logo-gold text-transparent bg-clip-text">
                Manage your books and store easily
              </p>
              <div>
                <button
                  className=" bg-logo-gold! px-10! py-3! font-sans! mt-30 text-slate-900! font-bold text-xl! hover:bg-amber-400! active:scale-80 duration-400!"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Go Home
                </button>
              </div>
            </div>
          ) : (
            <div>
              <Outlet />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
