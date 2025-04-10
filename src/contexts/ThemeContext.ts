// src/contexts/ThemeContext.ts
import { createContext } from "react";

// Exporte o tipo Theme
export type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
