import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { NavLinks } from "@/components/navbar/NavLinks";
import { CartIcon } from "@/components/navbar/CartIcon";
import { UserIcon } from "@/components/navbar/UserIcon";
import { FavoriteIcon } from "@/components/navbar/FavoriteIcon";
import { ThemeToggle } from "@/themeToggle";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/utils";
// import Search from "@/components/navbar/Search";

export function Navbar({ onMenuToggle }: { onMenuToggle: () => void }) {
  const { theme } = useTheme();

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b shadow-xl h-18 backdrop-blur-md",
        theme === "dark"
          ? "border-blue-500/30 text-blue-100"
          : "border-blue-500/30 text-blue-800 bg-white/80"
      )}
    >
      <div className="container px-4 sm:px-10 lg:px-15">
        <div className="flex items-center justify-between h-18">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="md:hidden p-2 rounded-md hover:bg-blue-500/20 transition-colors duration-200"
              onClick={onMenuToggle}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 " />
            </button>
            <Link to="/" className="hidden sm:flex items-center gap-2">
              <span
                className={cn(
                  "flex text-lg sm:text-md lg:xl xl:text-2xl font-bold hover:text-blue-400 transition-colors duration-200",
                  theme === "dark" ? "text-blue-100" : "text-black"
                )}
              >
                Cript
                <span
                  className={cn(
                    "text-blue-400 hover:text-black transition-colors duration-200",
                    theme === "dark" ? "text-blue-900" : "text-blue-500"
                  )}
                >
                  Store
                </span>
              </span>
            </Link>
          </div>

          {/* Center Section */}
          <NavLinks className="hidden md:flex mx-6 space-x-5 xl:pl-45" />

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* <Search /> */}
            <UserIcon />
            <CartIcon />
            <FavoriteIcon />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
