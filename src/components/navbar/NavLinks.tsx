import { NavLink } from "react-router-dom";
import { cn } from "@/utils/utils";
import { Home, ShoppingBag, Info } from "lucide-react"; // Ícones
import { FaHeadset } from "react-icons/fa";
import { useTheme } from "@/hooks/useTheme"; // Importe o useTheme

type NavLinksProps = {
  className?: string;
  onClick?: () => void;
};

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/categories", label: "Courses", icon: ShoppingBag },
  { to: "/about", label: "About", icon: Info },
  { to: "/contact", label: "Contact", icon: FaHeadset },
];

export function NavLinks({ className, onClick }: NavLinksProps) {
  const { theme } = useTheme(); // Use o hook useTheme

  return (
    <div className={cn("flex", className)}>
      {links.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          onClick={onClick}
          className={({ isActive }) =>
            cn(
              "relative flex items-center gap-2 text-sm font-medium transition-all duration-300 sm:px-0 md:px-0 lg:px-5 xl:px-10 py-2 rounded-lg",
              theme === "dark"
                ? "text-blue-200 hover:text-blue-400 hover:bg-blue-500/20"
                : "text-blue-800 hover:text-blue-600 hover:bg-blue-100",
              isActive
                ? theme === "dark"
                  ? "bg-blue-500/30 text-blue-100 shadow-lg"
                  : "bg-blue-100 text-blue-800 shadow-lg"
                : theme === "dark"
                ? "text-blue-200"
                : "text-blue-800"
            )
          }
        >
          <Icon
            className={cn(
              "w-4 h-4 transition-colors duration-300",
              theme === "dark" ? "text-blue-200" : "text-blue-800"
            )}
          />
          {label}
        </NavLink>
      ))}
    </div>
  );
}
