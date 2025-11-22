import CategoryItem from "../components/CategoryItem";

function Categorys() {
  // 📸 Simulación de categorías (solo cambiá las imágenes y textos)
  const categories = [
    {
      name: "Cafés",
      image: "/images/category-cafes.jpg",
      description: "Nuestros clásicos cafés recién preparados",
    },
    {
      name: "Postres",
      image: "/images/category-postres.jpg",
      description: "Dulces irresistibles hechos artesanalmente",
    },
    {
      name: "Tés y Bebidas",
      image: "/images/category-te.jpg",
      description: "Infusiones y bebidas frías para cada momento",
    },
    {
      name: "Desayunos",
      image: "/images/category-desayuno.jpg",
      description: "Combinaciones perfectas para empezar el día",
    },
    {
      name: "Sandwiches",
      image: "/images/category-sandwich.jpg",
      description: "Sabores únicos con pan artesanal",
    },
    {
      name: "Combos Especiales",
      image: "/images/category-combo.jpg",
      description: "Elegí tu combo favorito y disfrutá más por menos",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#5b4636] pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#5b4636]">
          Categorías
        </h1>
        <p className="text-lg md:text-xl text-[#a97a45] mb-12">
          Nuestras delicias para cada gusto ☕🍰
        </p>

        {/* GRID DE CATEGORÍAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryItem key={category.name} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categorys;
