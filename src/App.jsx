import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import AdminLayout from "./component/admin/AdminLayout";
import AllBooks from "./component/admin/AllBooks";
import AddBook from "./component/admin/AddBook";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./component/ProtectedRoute";
import { CartProvider } from "./auth/CartContext";
import { Toaster } from "react-hot-toast";
import CartPage from "./pages/CartPage";
import UpdateBook from "./component/admin/UpdateBook";
import BookDetails from "./pages/BookDetails";
import OnSaleProducts from "./component/OnSaleProducts";
import Checkout from "./component/Checkout";
import OrderSuccess from "./component/OrderSuccess";
import Footer from "./component/Footer";
import MyOrders from "./component/MyOrders";

function App() {
  const location = useLocation();
  const highHeader = /^\/admin(\/|$)/.test(location.pathname);
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            zIndex: 9999,
          },
        }}
      />
      <AuthProvider>
        <CartProvider>
          <div>
            {!highHeader && (
              <>
                <Header />
                <div className="h-20"></div>
              </>
            )}
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/book-details/:id" element={<BookDetails />} />
                <Route path="on-sale-product" element={<OnSaleProducts />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="order-success" element={<OrderSuccess />} />
                <Route path="my-orders" element={<MyOrders />} />

                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute requiredRole="admin">
                      <AdminLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route path="all-books" element={<AllBooks />} />
                  <Route path="add-book" element={<AddBook />} />
                  <Route path="update-book/:id" element={<UpdateBook />} />
                </Route>
              </Routes>
            </AnimatePresence>
            {!highHeader && <Footer />}
          </div>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
