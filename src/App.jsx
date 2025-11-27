import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Categorys from "./pages/Categorys";
import Detalle from "./pages/Detalle";
import Checkout from "./pages/Checkout";
import CartProvider from "./hooks/CartProvider";
import AuthProvider from "./hooks/AuthProvider";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        {/* Navbar global */}
        <Navbar />

        {/* Contenido principal */}
        <Routes>
          {/* 🔹 Rutas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 🔹 Categorías */}
          <Route path="/category" element={<Categorys />} />
          <Route path="/category/:category" element={<Category />} />

          {/* 🔹 Productos */}
          <Route path="/product/:id" element={<Detalle />} />

          {/* 🔹 Rutas protegidas para usuarios logueados */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          {/* 🔹 Rutas protegidas para administradores */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requereAdmin={true}>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* 🔹 Página no encontrada */}
          <Route path="*" element={<h1 className="text-center mt-10">404 - Página no encontrada</h1>} />
        </Routes>

        {/* 🔹 Notificaciones */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
