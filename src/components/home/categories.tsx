import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/utils";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { categories } from "@/const/categoriesData";
import CategoryCard from "@/components/home/CategoryCard";

export default function Categories() {
  const { theme } = useTheme();
  const [visibleItems, setVisibleItems] = useState(3);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleItems((prev) => prev + 3);
      setLoading(false);
    }, 1500);
  };

  return (
    <section
      className={cn(
        "flex flex-col py-10 items-center justify-center gap-10",
        theme === "dark" ? "bg-blue-900/40" : "bg-white"
      )}
    >
      <div className={cn("flex flex-col items-center justify-center text-center w-full", theme === "dark" ? "text-blue-300" : "text-blue-600")}>
        <h1
          className={cn(
            "text-4xl font-bold mb-4",
            theme === "dark"
              ? "text-blue-200 drop-shadow-[0_0_10px_rgba(0,191,255,0.8)]"
              : "text-blue-900 drop-shadow-[0_0_10px_rgba(0,0,139,0.8)]"
          )}
        >
          Explore Our E-books
        </h1>
        <p
          className={cn(
            "text-lg",
            theme === "dark" ? "text-blue-400" : "text-blue-600"
          )}
        >
          Discover exclusive resources to master the world of cryptocurrencies
          and blockchain.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 px-4">
        {categories.slice(0, visibleItems).map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>

      {visibleItems < categories.length && (
        <button
          onClick={loadMore}
          disabled={loading}
          className={cn(
            "px-6 py-2 text-lg font-semibold rounded-lg transition-all duration-300 relative overflow-hidden",
            "focus:outline-none focus:ring-4 focus:ring-blue-500/50",
            theme === "dark"
              ? "text-blue-300 border-2 border-blue-200 bg-transparent backdrop-blur-md"
              : "text-blue-500 border-2 border-blue-500 bg-transparent",
            "before:absolute before:inset-0 before:bg-blue-500/40 before:blur-md before:opacity-0 hover:before:opacity-100",
            "after:absolute after:-inset-1 after:bg-blue-700/20 after:rounded-lg after:animate-pulse"
          )}
        >
          {loading ? (
            <LoadingSpinner />
          ) : (
            <span className="relative z-10">See More</span>
          )}
        </button>
      )}
    </section>
  );
}
