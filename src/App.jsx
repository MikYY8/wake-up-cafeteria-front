import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TelegramButton from "./components/TelegramButton";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Navbar />

      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/categorias" element={<Categories />} />
          <Route path="/categorias/:categoriaId" element={<Products />} />

          <Route path="/categorias/:categoriaId/:id" element={<ProductDetail />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </main>

      <Footer />
      <TelegramButton />
    </>
  );
}

export default App;
