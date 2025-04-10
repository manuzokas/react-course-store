import { AnimatePresence, motion } from "framer-motion";
import { NavLinks } from "./NavLinks";
import { useEffect } from "react";
import { cn } from "@/utils/utils";
import { useTheme } from "@/hooks/useTheme";
import { useAuth } from "@clerk/clerk-react"; // Importe o useAuth
import { FaUser, FaSignOutAlt } from "react-icons/fa"; // Ícones para autenticação
import { NavLink } from "react-router-dom";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { theme } = useTheme();
  const { isSignedIn, signOut } = useAuth(); // Use o hook useAuth

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest(".menu-button")) return;

      if (!target.closest(".mobile-menu")) {
        onClose();
      }
    };

    const timeout = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Fundo escuro semi-transparente com efeito de brilho */}
          <motion.div
            className={cn(
              "fixed inset-0 z-40 backdrop-blur-sm",
              theme === "dark" ? "bg-black/20" : "bg-white/50"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu lateral deslizante da esquerda */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={cn(
              "fixed left-0 top-0 w-80 h-full shadow-2xl z-50 flex flex-col mobile-menu",
              theme === "dark"
                ? "bg-gradient-to-b from-blue-900 via-purple-900/30 to-gray-900 text-blue-100"
                : "bg-gradient-to-b from-blue-900 via-blue-50/0 to-gray-100 text-blue-800"
            )}
            style={{
              boxShadow:
                "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(99, 102, 241, 0.3)",
            }}
          >
            {/* Botão de fechar com estilo cyber */}
            <button
              className="self-end text-2xl text-blue-400 hover:text-blue-200 transition-all duration-300 hover:scale-110 py-3 px-3"
              onClick={onClose}
              style={{ textShadow: "0 0 8px rgba(59, 130, 246, 0.8)" }}
            >
              ✕
            </button>

            {/* Links de navegação com efeito neon */}
            <div className="flex-1 py-3">
              <NavLinks
                className={cn(
                  "flex flex-col w-80 space-y-6 text-lg font-medium text-center rounded-lg transition-all duration-300 hover:bg-opacity-20",
                  theme === "dark"
                    ? "hover:shadow-neon-blue"
                    : "hover:text-blue-900 hover:shadow-neon-white"
                )}
                onClick={onClose}
              />
            </div>

            {/* Links de autenticação */}
            <div className="p-4 border-t border-gray-200 flex flex-col space-y-4">
              {isSignedIn ? (
                <>
                  <NavLink
                    to="/profile"
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300",
                      theme === "dark"
                        ? "text-blue-200 hover:text-blue-400 hover:bg-blue-500/20"
                        : "text-blue-800 hover:text-blue-600 hover:bg-blue-100"
                    )}
                  >
                    <FaUser className="w-4 h-4" />
                    Profile
                  </NavLink>
                  <button
                    onClick={() => {
                      signOut();
                      onClose(); // Fecha o menu após o logout
                    }}
                    className={cn(
                      "flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300",
                      theme === "dark"
                        ? "text-red-200 hover:text-blue-400 hover:bg-blue-500/20"
                        : "text-red-800 hover:text-blue-600 hover:bg-blue-100"
                    )}
                  >
                    <FaSignOutAlt className="w-4 h-4 text-red-500" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/sign-in"
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300",
                      theme === "dark"
                        ? "text-blue-200 hover:text-blue-400 hover:bg-blue-500/20"
                        : "text-blue-800 hover:text-blue-600 hover:bg-blue-100"
                    )}
                  >
                    <FaUser className="w-4 h-4" />
                    Login
                  </NavLink>
                  <NavLink
                    to="/sign-up"
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300",
                      theme === "dark"
                        ? "text-blue-200 hover:text-blue-400 hover:bg-blue-500/20"
                        : "text-blue-800 hover:text-blue-600 hover:bg-blue-100"
                    )}
                  >
                    <FaUser className="w-4 h-4" />
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
