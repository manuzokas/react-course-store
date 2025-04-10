import React, { useState } from "react";
import ProductCard from "@/components/category/ProductCard";
import SearchAndFilter from "@/components/category/SearchAndFilter";
import { cn } from "@/utils/utils";
import { useTheme } from "@/hooks/useTheme";

// Dados de exemplo
const products = [
  {
    id: 1,
    name: "Course X",
    price: 100,
    image: "https://static1.bigstockphoto.com/7/3/3/large1500/337594666.jpg",
    category: "Categoria A",
    difficulty: "Beginner", // Adicionado
    rating: 4.5, // Adicionado
  },
  {
    id: 2,
    name: "Course Y",
    price: 200,
    image: "https://static1.bigstockphoto.com/7/3/3/large1500/337594666.jpg",
    category: "Categoria B",
    difficulty: "Intermediate", // Adicionado
    rating: 4.0, // Adicionado
  },
  {
    id: 3,
    name: "Course Z",
    price: 300,
    image: "https://static1.bigstockphoto.com/7/3/3/large1500/337594666.jpg",
    category: "Categoria A",
    difficulty: "Advanced", // Adicionado
    rating: 3.5, // Adicionado
  },
  {
    id: 4,
    name: "Course W",
    price: 400,
    image: "https://static1.bigstockphoto.com/7/3/3/large1500/337594666.jpg",
    category: "Categoria C",
    difficulty: "Beginner", // Adicionado
    rating: 5.0, // Adicionado
  },
];

const categories = ["Categoria A", "Categoria B", "Categoria C"];

const CategoryPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const { theme } = useTheme();

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesDifficulty = selectedDifficulty
      ? product.difficulty === selectedDifficulty
      : true;
    const matchesPrice =
      selectedPrice === "Free"
        ? product.price === 0
        : selectedPrice === "Paid"
        ? product.price > 0
        : selectedPrice === "Under50"
        ? product.price < 50
        : selectedPrice === "50to100"
        ? product.price >= 50 && product.price <= 100
        : selectedPrice === "Over100"
        ? product.price > 100
        : true;
    const matchesRating = selectedRating
      ? product.rating >= parseFloat(selectedRating)
      : true;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesDifficulty &&
      matchesPrice &&
      matchesRating
    );
  });

  return (
    <div
      className={cn(
        "min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-cover bg-center",
        theme === "dark"
          ? "bg-blue-900/20 text-white"
          : "bg-gray-100 text-gray-900"
      )}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Grid principal para organizar a busca e os produtos */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Barra de pesquisa e filtro (1 coluna) */}
          <div className="lg:col-span-1">
            <SearchAndFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedDifficulty={selectedDifficulty}
              onDifficultyChange={setSelectedDifficulty}
              selectedPrice={selectedPrice}
              onPriceChange={setSelectedPrice}
              selectedRating={selectedRating}
              onRatingChange={setSelectedRating}
              categories={categories}
            />
          </div>

          {/* Listagem de produtos (3 colunas) */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
