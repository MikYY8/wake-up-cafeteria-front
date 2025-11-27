import CategoryItem from "../components/CategoryItem";
import useCategories from "../hooks/useCategories";
import { useNavigate } from "react-router-dom";




function Categorys() {
  const { categories, isLoading, error } = useCategories();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#f8f5f0]">
        <p className="text-[#5b4636] text-2xl font-semibold">Cargando categorías...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#f8f5f0]">
        <p className="text-red-600 text-2xl font-semibold">
          Error al cargar las categorías 😕
        </p>
      </div>
    );
  }

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
            <div
              key={category.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-[#e8d9c4]"
            >
              <CategoryItem category={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categorys;
