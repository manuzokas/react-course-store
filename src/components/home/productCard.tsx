import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { addItem } from "@/store/cartSlice";
import { addFavorite, removeFavorite } from "@/store/favoriteSlice";
import { useAuth } from "@clerk/clerk-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/utils";
import ProductActions from "@/components/home/ProductActions";

export interface Product {
  id: number;
  discount: string;
  image: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
}

const ProductCard: React.FC<Product> = ({
  id,
  discount,
  image,
  name,
  description,
  price,
  originalPrice,
}) => {
  const dispatch = useAppDispatch();
  const { isSignedIn } = useAuth();
  const { theme } = useTheme();
const favoriteItems: { id: string; name: string; price: number }[] = useAppSelector((state: { favorites: { items: { id: string; name: string; price: number }[] } }) => state.favorites.items);
  const isFavorite = favoriteItems.some((item) => item.id === id.toString());

  const handleAddToCart = () => {
    if (!isSignedIn) {
      window.location.href = "/sign-in";
      return;
    }
    const item = {
      id: id.toString(),
      name,
      price,
      quantity: 1,
      image,
    };
    dispatch(addItem(item));
  };

  const handleToggleFavorite = () => {
    if (!isSignedIn) {
      window.location.href = "/sign-in";
      return;
    }
    const item = {
      id: id.toString(),
      name,
      price,
    };
    if (isFavorite) {
      dispatch(removeFavorite(item.id));
    } else {
      dispatch(addFavorite({ ...item, image }));
    }
  };

  const handleShare = () => {
    const productUrl = `${window.location.origin}/product/${id}`;
    navigator.clipboard.writeText(productUrl).then(() => {
      alert("Link do produto copiado para a área de transferência!");
    });
  };

  const handleCompare = () => {
    alert("Funcionalidade de comparação ainda não implementada.");
  };

  return (
    <section
      className={cn(
        "relative flex flex-col mx-auto justify-center group w-65 h-90 sm:w-full overflow-hidden rounded-lg backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 hover:scale-105",
        theme === "dark" ? "bg-blue-500/20" : "bg-white/60 "
      )}
    >
      <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-bold">
        {discount}
      </div>
      <div className="flex justify-center">
        <img
          src={image}
          alt={name}
          className="w-64 h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-opacity-0 group-hover:bg-black/60 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
        <button
          className={cn(
            "px-3 py-1 sm:px-4 sm:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            theme === "dark"
              ? "bg-blue-600 text-white hover:bg-red-700"
              : "bg-blue-500 text-white hover:bg-red-600"
          )}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <ProductActions
          onShare={handleShare}
          onCompare={handleCompare}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={isFavorite}
        />
      </div>
      <div className="flex flex-col items-start justify-center px-4 py-4">
        <h2
          className={cn(
            "text-lg font-bold",
            theme === "dark" ? "text-blue-200" : "text-blue-800"
          )}
        >
          {name}
        </h2>
        <p
          className={cn(
            "text-sm",
            theme === "dark" ? "text-blue-400" : "text-blue-600"
          )}
        >
          {description}
        </p>
        <div className="flex gap-2">
          <p
            className={cn(
              "font-bold",
              theme === "dark" ? "text-blue-500" : "text-blue-600"
            )}
          >
            ${price}
          </p>
          <p
            className={cn(
              "text-sm line-through",
              theme === "dark" ? "text-blue-400" : "text-blue-500"
            )}
          >
            ${originalPrice}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
