import React from "react";
import { cn } from "@/utils/utils";
import { useTheme } from "@/hooks/useTheme";

interface SearchAndFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedDifficulty: string;
  onDifficultyChange: (difficulty: string) => void;
  selectedPrice: string;
  onPriceChange: (price: string) => void;
  selectedRating: string;
  onRatingChange: (rating: string) => void;
  categories: string[];
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedPrice,
  onPriceChange,
  selectedRating,
  onRatingChange,
  categories,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "rounded-lg p-6 border border-blue-500/30 shadow-[0_0_15px_rgba(0,191,255,0.3)]",
        theme === "dark" ? "bg-black/20 backdrop-blur-md" : "bg-white/80"
      )}
    >
      <div className="flex flex-col gap-6">
        {/* Campo de busca */}
        <div>
          <label
            className={cn(
              "block text-sm font-medium mb-2",
              theme === "dark" ? "text-blue-300" : "text-blue-600"
            )}
          >
            Search
          </label>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={cn(
              "w-full px-4 py-2 rounded-md border border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500",
              theme === "dark"
                ? "bg-black/50 text-white placeholder-blue-400/70"
                : "bg-white/50 text-black placeholder-blue-600/70"
            )}
          />
        </div>

        {/* Filtro de categorias */}
        <div>
          <label
            className={cn(
              "block text-sm font-medium mb-2",
              theme === "dark" ? "text-blue-300" : "text-blue-600"
            )}
          >
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className={cn(
              "w-full px-4 py-2 rounded-md border border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500",
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            )}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro de nível de dificuldade */}
        <div>
          <label
            className={cn(
              "block text-sm font-medium mb-2",
              theme === "dark" ? "text-blue-300" : "text-blue-600"
            )}
          >
            Difficulty
          </label>
          <select
            value={selectedDifficulty}
            onChange={(e) => onDifficultyChange(e.target.value)}
            className={cn(
              "w-full px-4 py-2 rounded-md border border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500",
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            )}
          >
            <option value="">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Filtro de preço */}
        <div>
          <label
            className={cn(
              "block text-sm font-medium mb-2",
              theme === "dark" ? "text-blue-300" : "text-blue-600"
            )}
          >
            Price
          </label>
          <select
            value={selectedPrice}
            onChange={(e) => onPriceChange(e.target.value)}
            className={cn(
              "w-full px-4 py-2 rounded-md border border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500",
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            )}
          >
            <option value="">All Prices</option>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
            <option value="Under50">Under $50</option>
            <option value="50to100">$50 - $100</option>
            <option value="Over100">Over $100</option>
          </select>
        </div>

        {/* Filtro de avaliação */}
        <div>
          <label
            className={cn(
              "block text-sm font-medium mb-2",
              theme === "dark" ? "text-blue-300" : "text-blue-600"
            )}
          >
            Rating
          </label>
          <select
            value={selectedRating}
            onChange={(e) => onRatingChange(e.target.value)}
            className={cn(
              "w-full px-4 py-2 rounded-md border border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500",
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            )}
          >
            <option value="">All Ratings</option>
            <option value="4.5">4.5 Stars & Up</option>
            <option value="4">4 Stars & Up</option>
            <option value="3">3 Stars & Up</option>
            <option value="2">2 Stars & Up</option>
            <option value="1">1 Star & Up</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
