// src/pages/Login/LoginForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "@/schemas/authSchema";
import { FormInput } from "@/components/forms/FormInput";
import { SocialAuth } from "@/components/forms/SocialAuth";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import ecommerceBg from "@/assets/shopping-bg.jpg";
import { useSignIn } from "@clerk/clerk-react";
import { useState } from "react";

export function LoginForm() {
  const { signIn, isLoaded } = useSignIn();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    if (!isLoaded || !signIn) {
      setError("Erro ao carregar autenticação. Tente novamente.");
      return;
    }

    try {
      const signInResponse = await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      if (signInResponse.createdSessionId) {
        navigate("/");
        window.location.reload();
      } else {
        throw new Error("Erro ao iniciar sessão.");
      }
    } catch {
      setError("Cblueenciais inválidas. Tente novamente.");
    }
  };

  return (
    <div
      className="min-h-screen bg-black flex flex-col items-center justify-center p-4"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-md py-8 px-10 bg-white/90 backdrop-blur-sm border border-white/10 shadow-2xl shadow-blue-500/90 space-y-6 transition-all duration-300 hover:shadow-blue-500/80 relative"
      >
        <div className="flex flex-col items-center space-y-2 w-full p-0">
          <FaUserCircle className="text-6xl text-blue-600 animate-spin" />
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 text-center">
            Sign In
          </h1>
          <p className="text-center text-gray-700 font-medium">
            Log in to your account to continue shopping
          </p>
        </div>

        {error && (
          <div className="text-blue-600 text-center font-medium">{error}</div>
        )}

        <div className="space-y-4">
          <FormInput<LoginSchema>
            label="E-mail"
            name="email"
            type="email"
            placeholder="exemplo@email.com"
            register={register}
            error={errors.email}
          />
          <FormInput<LoginSchema>
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            register={register}
            error={errors.password}
          />
        </div>

        <div className="flex justify-end">
          <a
            href="#"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Forgot your password?
          </a>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-pink-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"
          } transform hover:scale-[1.01]`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Logging in...
            </div>
          ) : (
            "Log In"
          )}
        </button>

        <div className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Sign up here
          </Link>
        </div>

        <div className="flex items-center text-gray-500">
          <div className="flex-1 h-px bg-blue-500"></div>
          <span className="text-sm font-medium text-gray-700 px-4">
            Or log in with
          </span>
          <div className="flex-1 h-px bg-blue-500"></div>
        </div>

        <SocialAuth />
      </form>
    </div>
  );
}
