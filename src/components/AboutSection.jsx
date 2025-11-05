import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";

function AboutSection() {
  return (
    <section className="bg-[#f8f5f0] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* IMÁGENES CRUZADAS */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          {/* Imagen superior izquierda */}
          <img
            src={about1}
            alt="Café artesanal"
            className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl absolute -top-12 -left-8 border-4 border-white rotate-[-3deg] z-10"
          />
          {/* Imagen inferior derecha */}
          <img
            src={about2}
            alt="Ambiente Wake Up"
            className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl absolute top-28 -right-12 border-4 border-white rotate-[3deg] z-20"
          />
          {/* Espacio para mantener altura */}
          <div className="h-[30rem] md:h-[32rem] w-full"></div>
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
  );
}

export default AboutSection;
