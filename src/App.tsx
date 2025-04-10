// src/App.tsx : responsavel por gerenciar o layout e os providers da aplicacao
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/themeProvider";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Suspense fallback={<LoadingSpinner fullScreen />}>
          <Outlet />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}
