import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Capuccino from "../assets/Capuccino.jpg";
import Torta1 from "../assets/Torta1.jpg";
import Panaderia1 from "../assets/Panaderia1.webp";
import Bebidas1 from "../assets/Bebidas1.webp";

function Home() {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate("/category"); // ✅ Redirige a la página de categorías
  };

  return (
    <div className="bg-orange-50 min-h-screen flex flex-col">
      <Hero />

      {/* 🏷️ Sección de categorías */}
      <section className="max-w-7xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-amber-900 mb-6">
          Nuestras categorías
        </h2>
        <p className="text-amber-800 mb-12">
          Encontrá tu sabor ideal entre nuestras opciones artesanales.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { img: Capuccino, name: "Cafés" },
            { img: Torta1, name: "Tortas" },
            { img: Panaderia1, name: "Panadería" },
            { img: Bebidas1, name: "Bebidas frías" },
          ].map((cat) => (
            <div
              key={cat.name}
              onClick={handleCategoryClick}
              className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="h-56 w-full object-cover"
              />
              <h3 className="text-lg font-semibold py-4 text-amber-900">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 Sección Promocional */}
      <section className="bg-[#d6a770] text-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Promociones del mes</h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Despertá tus mañanas con nuestras ofertas especiales de café y
          pastelería.
        </p>
        <button className="bg-white text-[#d6a770] px-6 py-3 rounded-full font-semibold hover:bg-amber-100 transition">
          Ver promociones
        </button>
      </section>

      <Footer />
    </div>
  );
}

export default Home;

