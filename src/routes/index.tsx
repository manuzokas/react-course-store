// src/routes/index.tsx
import { lazy } from "react";
import { createRoutesFromElements, Route } from "react-router-dom";
import { ProtectedRoute } from "@/components/protectedRoute";
import { Layout } from "@/components/layout/Layout";
import { App } from "@/App";

const HomePage = lazy(() => import("@/pages/Home"));
const LoginPage = lazy(() => import("@/pages/login"));
const RegisterPage = lazy(() => import("@/pages/register"));
const CartPage = lazy(() => import("@/pages/cart/CartPage"));
const FavoritesPage = lazy(() => import("@/pages/favorite/FavoritesPage"));
const ProfilePage = lazy(() => import("@/pages/profile/ProfilePage"));
const CategoryPage = lazy(() => import("@/pages/category/CoursesPage"));
const ContactPage = lazy(() => import("@/pages/contact/ContactPage"));
const AboutPage = lazy(() => import("@/pages/about/AboutPage"));

export const routes = createRoutesFromElements(
  <Route element={<App />}>

    {/* Rotas com Layout (Navbar + Footer) */}
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Adicione mais rotas protegidas aqui */}
        </Route>
    </Route>

    {/* Rotas sem Layout (sem Navbar e sem Footer) */}
    <Route path="/sign-in" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
  </Route>
);
