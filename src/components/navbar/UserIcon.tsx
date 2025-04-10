import { Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { cn } from "@/utils/utils";
import { useTheme } from "@/hooks/useTheme";

export function UserIcon() {
  const { isSignedIn, signOut } = useAuth();
  const { theme } = useTheme();

  const handleLogout = () => {
    signOut(); 
  };

  return (
    <div className="hidden sm:flex items-center gap-5">
      {isSignedIn ? (
        <>
          <Link
            to="/profile"
            className={cn("p-2 rounded-md transition-colors duration-200", theme === "dark" ? "hover:bg-blue-500/20 hover:text-blue-500" : "hover:bg-white/50 hover:text-blue-800")}
            aria-label="User profile"
          >
            <FaUser className="h-5 w-5" />
          </Link>
          <button
            onClick={handleLogout}
            className={cn("p-2 rounded-md transition-colors duration-200", theme === "dark" ? "hover:bg-blue-600/20 hover:text-blue-500" : "hover:bg-white/50 hover:text-blue-800")}
            aria-label="Logout"
          >
            <FaSignOutAlt className="h-5 w-5" />
          </button>
        </>
      ) : (
        <button
          onClick={() => window.location.href = "/sign-in"}
          className="p-2 rounded-md transition-colors duration-200"
          aria-label="Login"
        >
          <FaUser className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
