import React from "react";
import {
  FaRegShareSquare,
  FaExchangeAlt,
  FaRegHeart,
  FaHeart,
} from "react-icons/fa";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/utils";

interface ProductActionsProps {
  onShare: () => void;
  onCompare: () => void;
  onToggleFavorite: () => void;
  isFavorite: boolean;
}

const ProductActions: React.FC<ProductActionsProps> = ({
  onShare,
  onCompare,
  onToggleFavorite,
  isFavorite,
}) => {
  const { theme } = useTheme();

  return (
    <div className="flex text-xs sm:text-lg gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="flex gap-1 items-center">
        <FaRegShareSquare
          className={cn(
            "text-xl",
            theme === "dark" ? "text-blue-200" : "text-white"
          )}
        />
        <button
          className={cn(theme === "dark" ? "text-blue-200" : "text-white")}
          onClick={onShare}
        >
          Share
        </button>
      </div>
      <div className="flex gap-1 items-center">
        <FaExchangeAlt
          className={cn(
            "text-xl",
            theme === "dark" ? "text-blue-200" : "text-white"
          )}
        />
        <button
          className={cn(theme === "dark" ? "text-blue-200" : "text-white")}
          onClick={onCompare}
        >
          Compare
        </button>
      </div>
      <div className="flex gap-1 items-center">
        <button
          onClick={onToggleFavorite}
          className={cn(theme === "dark" ? "text-blue-200" : "text-white")}
        >
          {isFavorite ? (
            <FaHeart className="text-xl text-red-500" />
          ) : (
            <FaRegHeart className="text-xl" />
          )}
        </button>
        <span
          className={cn(theme === "dark" ? "text-blue-200" : "text-white")}
        >
          Like
        </span>
      </div>
    </div>
  );
};

export default ProductActions;
