import React from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { updateQuantity, removeItem } from "@/store/cartSlice";
import { cn } from "@/utils/utils";
import { useTheme } from "@/hooks/useTheme";
import { FaCartPlus } from "react-icons/fa";

const Cart: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const { theme } = useTheme();

  const handleIncreaseQuantity = (id: string) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecreaseQuantity = (id: string) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      if (item.quantity > 1) {
        dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
      } else {
        dispatch(removeItem(id)); // Remove o item se a quantidade for 1
      }
    }
  };

  return (
    <div
      className={cn(
        "min-h-screen py-8 px-4 sm:px-6 lg:px-8",
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
          Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg">Your cart is empty.</p>
            <a
              href="/"
              className="mt-4 inline-block px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div
            className={cn(
              "shadow-lg rounded-xl overflow-hidden",
              theme === "dark" ? "bg-black" : "bg-white"
            )}
          >
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <FaCartPlus className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold">Items in Cart</h3>
              </div>
            </div>

            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  {/* Imagem do item */}
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  {/* Detalhes do item */}
                  <div className="flex-1">
                    <h4
                      className={cn(
                        "text-lg font-medium",
                        theme === "dark" ? "text-blue-300" : "text-blue-500"
                      )}
                    >
                      {item.name}
                    </h4>
                    <p>${item.price.toFixed(2)}</p>
                  </div>

                  {/* Contador de quantidade */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className={cn(
                        "w-8 h-8 flex items-center justify-center rounded-md transition-colors",
                        theme === "dark"
                          ? "bg-blue-200 text-black font-extrabold hover:bg-blue-600"
                          : "bg-gray-200 hover:bg-gray-300"
                      )}
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className={cn(
                        "w-8 h-8 flex items-center justify-center rounded-md transition-colors",
                        theme === "dark"
                          ? "bg-blue-200 text-black font-extrabold hover:bg-blue-600"
                          : "bg-gray-200 hover:bg-gray-300"
                      )}
                    >
                      +
                    </button>
                  </div>

                  {/* Preço total do item */}
                  <div className="mt-4 sm:mt-0 sm:ml-4">
                    <p className="text-lg font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total e botão de finalizar compra */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Total</h3>
                <p className="text-xl font-bold">
                  $
                  {cartItems
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
              <button
                className={cn(
                  "mt-6 w-full px-6 py-3 rounded-md transition-colors",
                  theme === "dark"
                    ? "bg-blue-600 text-black font-bold hover:bg-blue-800"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                )}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
