import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "@/hooks/useRedux";
import { useAuth } from "@clerk/clerk-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/utils";

export function CartIcon() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const { isSignedIn } = useAuth();
  const { theme } = useTheme(); 

  const handleCartClick = (e: React.MouseEvent) => {
    if (!isSignedIn) {
      e.preventDefault();
      window.location.href = "/sign-in";
    }
  };

  return (
    <Link
      to={isSignedIn ? "/cart" : "#"}
      onClick={handleCartClick}
      className={cn(
        "relative p-2 rounded-md transition-colors",
        theme === "dark"
          ? "hover:bg-blue-500/20 text-blue-200"
          : "hover:bg-white/50 text-blue-800"
      )}
    >
      <ShoppingCart
        className={cn(
          "h-5 w-5",
          theme === "dark" ? "text-blue-100" : "text-blue-800"
        )}
      />
      {itemCount > 0 && (
        <span
          className={cn(
            "absolute -top-1 -right-1 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center",
            theme === "dark"
              ? "bg-blue-500 text-blue-200"
              : "bg-blue-500 text-white"
          )}
        >
          {itemCount}
        </span>
      )}
    </Link>
  );
}
