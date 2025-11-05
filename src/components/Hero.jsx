import heroBanner from "../assets/CarrouselPrincipal.jpg";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";

function Hero() {
  return (
    <>
      {/* ======= SECCIÓN PRINCIPAL (HERO) ======= */}
      <section className="relative h-[600px] w-full">
        {/* Imagen de fondo */}
        <img
          src={heroBanner}
          alt="Wake Up Cafetería"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Capa oscura (overlay) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Contenido sobre la imagen */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Bienvenido a <span className="text-[#d6a770]">Wake Up</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Disfrutá del mejor café, acompañamientos deliciosos y un ambiente único.
          </p>
          <button className="bg-[#d6a770] hover:bg-[#c4955e] text-white font-semibold px-8 py-3 rounded-lg transition-all">
            Ver Productos
          </button>
        </div>
      </section>

      {/* ======= SECCIÓN SOBRE NOSOTROS ======= */}
      <section className="bg-[#f8f5f0] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* IMÁGENES CRUZADAS */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            {/* Imagen superior izquierda */}
            <img
              src={about1}
              alt="Café artesanal"
              className="w-64 h-64 object-cover rounded-2xl shadow-lg absolute -top-10 left-10 border-4 border-white"
            />
            {/* Imagen inferior derecha */}
            <img
              src={about2}
              alt="Ambiente Wake Up"
              className="w-64 h-64 object-cover rounded-2xl shadow-lg absolute top-24 right-10 border-4 border-white"
            />
            {/* Espacio para mantener altura */}
            <div className="h-96 w-full"></div>
          </div>

          {/* TEXTO */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-[#5b4636] mb-4">
              Sobre <span className="text-[#d6a770]">Nosotros</span>
            </h2>
            <p className="text-lg text-[#5b4636] leading-relaxed mb-6">
              En <strong>Wake Up</strong> creemos que un buen café es más que una bebida:
              es una experiencia que despierta los sentidos. Nos apasiona ofrecer
              productos artesanales elaborados con ingredientes de la más alta calidad.
            </p>
            <p className="text-lg text-[#5b4636] leading-relaxed">
              Cada día trabajamos para brindarte un espacio cálido, acogedor y lleno de
              aromas únicos que te inviten a disfrutar cada momento.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
