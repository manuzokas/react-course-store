import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useAppSelector } from "@/hooks/useRedux"; 
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/utils";

export function FavoriteIcon() {
  const { theme } = useTheme();
  const favoriteItems = useAppSelector((state) => state.favorites.items);
  const favoriteCount = favoriteItems.length;

  return (
    <Link
      to="/favorites"
      className={cn(
        "relative p-2 rounded-md transition-colors",
        theme === "dark"
          ? "hover:bg-blue-500/20 text-red-200"
          : "hover:bg-white/50 text-red-800 hover:text-red-500"
      )}
    >
      <Heart
        className="h-5 w-5"
      />
      {favoriteCount > 0 && (
        <span
          className={cn(
            "absolute -top-1 -right-1 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center",
            theme === "dark"
              ? "bg-blue-500 text-blue-200"
              : "bg-blue-500 text-white"
          )}
        >
          {favoriteCount}
        </span>
      )}
    </Link>
  );
}
