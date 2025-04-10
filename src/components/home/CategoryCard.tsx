import { cn } from "@/utils/utils";
import { useTheme } from "@/hooks/useTheme";

interface Category {
  image: string;
  title: string;
  description: string;
}

export default function CategoryCard({ category }: { category: Category }) {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "flex flex-col w-100 h-100 items-center justify-center p-10 rounded-lg backdrop-blur-md border border-blue-500/50 shadow-lg transition-all duration-300 hover:scale-105",
        theme === "dark"
          ? "bg-black/80 hover:bg-white/5"
          : "bg-white/60 hover:bg-blue-600/20"
      )}
    >
      <div className="flex justify-center">
        <img
          src={category.image}
          alt={category.title}
          className="w-64 h-64 object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-6">
        <h2
          className={cn(
            "text-2xl font-bold",
            theme === "dark" ? "text-blue-200" : "text-blue-800"
          )}
        >
          {category.title}
        </h2>
        <p
          className={cn(
            "text-center mt-2",
            theme === "dark" ? "text-blue-400" : "text-blue-600"
          )}
        >
          {category.description}
        </p>
      </div>
    </div>
  );
}
