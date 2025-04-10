import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "@/schemas/authSchema";
import { FormInput } from "@/components/forms/FormInput";
import { SocialAuth } from "@/components/forms/SocialAuth";
import { Link, useNavigate } from "react-router-dom";
import { useSignUp, useAuth } from "@clerk/clerk-react";
import { useState } from "react";

export function RegisterForm() {
  const navigate = useNavigate();
  const { signUp } = useSignUp();
  const { signOut } = useAuth();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterSchema) => {
    try {
      setError(""); // Limpa erro anterior

      if (!signUp) {
        throw new Error(
          "Erro ao acessar o serviço de registro. Tente novamente."
        );
      }

      // Criando usuário no Clerk
      const signUpResponse = await signUp.create({
        emailAddress: data.email,
        password: data.password,
        firstName: data.name, // Clerk usa "firstName" para o nome
      });

      if (!signUpResponse.createdUserId) {
        throw new Error("Erro ao criar usuário no Clerk.");
      }

      // Desloga o usuário após o cadastro
      await signOut();

      // Reseta o formulário após o cadastro bem-sucedido
      reset();

      // Redireciona para login após sucesso
      navigate("/sign-in?register=success");
      window.location.reload();
    } catch (error) {
      let errorMessage = "Erro ao registrar usuário. Tente novamente.";
      if (error instanceof Error) {
        errorMessage = error.message || errorMessage;
      }
      setError(errorMessage);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md rounded-md py-8 px-10 bg-white/90 backdrop-blur-sm border border-white/10 shadow-2xl shadow-blue-500 space-y-6 transition-all duration-300 hover:shadow-pink-500/80 relative"
      role="form"
    >
      <div className="flex flex-col items-center space-y-2 w-full p-0">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 text-center">
          Create Your Account
        </h1>
        <p className="text-center text-gray-700 font-medium">
          Join our community and start shopping online
        </p>
      </div>

      {error && <p className="text-blue-500 text-sm text-center">{error}</p>}

      <div className="space-y-4">
        <FormInput<RegisterSchema>
          label="Name"
          name="name"
          type="text"
          placeholder="Enter Your Name"
          register={register}
          error={errors.name}
        />
        <FormInput<RegisterSchema>
          label="E-mail"
          name="email"
          type="email"
          placeholder="Enter Your Email"
          register={register}
          error={errors.email}
        />
        <FormInput<RegisterSchema>
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          register={register}
          error={errors.password}
        />
        <FormInput<RegisterSchema>
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          register={register}
          error={errors.confirmPassword}
        />
      </div>

      <button
        type="submit"
        role="button"
        disabled={isSubmitting}
        aria-label="Create Your Account for Free"
        className={`w-full bg-gradient-to-r from-pink-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"
        } transform hover:scale-[1.01]`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Cadastrando...
          </div>
        ) : (
          "Create Your Account for Free"
        )}
      </button>

      <div className="text-center">
        <Link
          to="/sign-in"
          className="text-blue-500 hover:text-blue-600 font-bold transition-all"
        >
          <span className="text-gray-600 font-normal">
            Already have an account?
          </span>{" "}
          Sign In
        </Link>
      </div>

      <div className="flex items-center text-gray-500">
        <div className="flex-1 h-px bg-blue-700"></div>
        <span className="text-sm font-medium text-gray-800 px-4">
          Or register with
        </span>
        <div className="flex-1 h-px bg-blue-700"></div>
      </div>

      <SocialAuth />
    </form>
  );
}
