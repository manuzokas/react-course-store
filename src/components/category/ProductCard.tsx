import React from "react";
import { FaRegHeart, FaStar, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cn } from "@/utils/utils";
import { useTheme } from "@/hooks/useTheme";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number; // Nota do curso (ex: 4.5)
  description?: string; // Breve descrição do curso
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden border border-blue-500/30 shadow-[0_0_15px_rgba(0,191,255,0.3)] hover:shadow-[0_0_25px_rgba(0,191,255,0.6)] transition-shadow",
        theme === "dark" ? "bg-black/20 backdrop-blur-md" : "bg-white/80"
      )}
    >
      {/* Imagem do Curso */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover"
        />
        <div
          className={cn(
            "absolute top-2 left-2 px-3 py-1 text-xs font-bold rounded-md",
            theme === "dark"
              ? "bg-blue-500 text-white"
              : "bg-blue-600 text-white"
          )}
        >
          {product.category}
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-4">
        <h3 className="text-lg font-semibold line-clamp-2">{product.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description || "A complete course to master this skill."}
        </p>

        {/* Avaliação */}
        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < (product.rating || 4) ? "text-yellow-400" : "text-gray-400"
              }
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">
            ({product.rating || 4.5})
          </span>
        </div>

        {/* Preço e Ações */}
        <div className="mt-3 flex items-center justify-between">
          <p className="text-xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </p>
          <div className="flex gap-3">
            <button className="p-2 rounded-md hover:text-blue-500 transition">
              <FaRegHeart />
            </button>
            <button className="p-2 rounded-md hover:text-blue-500 transition">
              <FaShoppingCart />
            </button>
          </div>
        </div>

        {/* Botão de Inscrição */}
        <Link
          to={`/product/${product.id}`}
          className={cn(
            "mt-4 block w-full text-center px-4 py-2 rounded-md font-bold transition-colors",
            theme === "dark"
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          )}
        >
          Inscreva-se
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
