import { FaSearch } from "react-icons/fa";
import { cn } from "@/utils/utils";
import { useTheme } from "@/hooks/useTheme";

export default function Search() {
    const { theme } = useTheme();
    
  return (
    <button
      type="button"
      className={cn("p-2 rounded-md transition-colors duration-200", theme === "dark" ? "text-blue-100 hover:bg-blue-500/20 hover:text-blue-500" : "text-blue-800 hover:bg-white/50")}
      aria-label="Search products"
    >
      <FaSearch className="h-5 w-5" />
    </button>
  );
}
