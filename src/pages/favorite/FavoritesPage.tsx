import React from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { removeFavorite } from "@/store/favoriteSlice";
import { FaTimes, FaHeart } from "react-icons/fa";
import { cn } from "@/utils/utils";
import { useTheme } from "@/hooks/useTheme";

const FavoritesPage: React.FC = () => {
  interface FavoriteItem {
    id: string;
    name: string;
    price: number;
    image: string; // Certifique-se de que a URL da imagem está definida
  }

  const favoriteItems = useAppSelector(
    (state) => state.favorites.items
  ) as FavoriteItem[];
  const dispatch = useAppDispatch();
  const { theme } = useTheme();

  const handleRemoveFavorite = (id: string) => {
    dispatch(removeFavorite(id));
  };

  return (
    <div
      className={cn(
        "min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8",
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      )}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={cn(
            "text-3xl font-bold mb-8",
            theme === "dark" ? "text-blue-500" : "text-blue-500"
          )}
        >
          Favoritos
        </h2>

        {favoriteItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg">Sua lista de favoritos está vazia.</p>
            <a
              href="/"
              className="mt-4 inline-block px-6 py-2 rounded-md transition-colors"
            >
              Continuar Comprando
            </a>
          </div>
        ) : (
          <div
            className={cn(
              "shadow-lg rounded-lg overflow-hidden",
              theme === "dark" ? "bg-black" : "bg-white"
            )}
          >
            <div className="p-6 border-b border-blue-500">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FaHeart className="w-5 h-5 text-red-500" />
                Your Favorites
              </h3>
            </div>

            <ul className="divide-y divide-gray-200">
              {favoriteItems.map((item) => (
                <li
                  key={item.id}
                  className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={item.image || "https://via.placeholder.com/150"} // Fallback para imagem padrão
                      alt={item.name}
                      className="w-full h-full object-cover rounded-md"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/150"; // Fallback em caso de erro
                      }}
                    />
                  </div>
                  {/* Detalhes do item */}
                  <div className="flex-1">
                    <h4
                      className={cn(
                        "text-lg font-medium",
                        theme === "dark" ? "text-blue-500" : "text-blue-500"
                      )}
                    >
                      {item.name}
                    </h4>
                    <p>${item.price.toFixed(2)}</p>
                  </div>

                  {/* Botão de remover */}
                  <button
                    onClick={() => handleRemoveFavorite(item.id)}
                    className={cn(
                      "p-2 rounded-md transition-colors",
                      theme === "dark"
                        ? "bg-black hover:bg-red-800 hover:text-black text-red-500"
                        : "bg-blue-200 hover:bg-red-100 text-red-700"
                    )}
                    aria-label="Remover dos favoritos"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
