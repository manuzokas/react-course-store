import React from "react";
import { useUser } from "@clerk/clerk-react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEdit,
  FaSignOutAlt,
} from "react-icons/fa";
import { cn } from "@/utils/utils";
import { useTheme } from "@/hooks/useTheme";

const ProfilePage: React.FC = () => {
  const { user } = useUser();
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "min-h-screen py-8 px-4 sm:px-6 lg:px-8",
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-100 text-gray-900"
      )}
    >
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho do Perfil */}
        <div
          className={cn(
            "shadow-lg rounded-lg p-6 mb-8",
            theme === "dark" ? "bg-black text-white" : "bg-white"
          )}
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
              <FaUser className="w-12 h-12 text-gray-500" />
            </div>
            <h1
              className={cn(
                "text-2xl font-bold",
                theme === "dark" ? "text-white" : "text-gray-900"
              )}
            >
              {user?.fullName}
            </h1>
            <p
              className={cn(
                "mt-1",
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              )}
            >
              {user?.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </div>

        {/* Informações Pessoais */}
        <div
          className={cn(
            "shadow-lg rounded-lg p-6 mb-8",
            theme === "dark" ? "bg-black text-white" : "bg-white"
          )}
        >
          <h2
            className={cn(
              "text-xl font-bold mb-6",
              theme === "dark" ? "text-white" : "text-gray-900"
            )}
          >
            Informações Pessoais
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaUser
                className={cn(
                  "w-5 h-5",
                  theme === "dark" ? "text-gray-200" : "text-gray-500"
                )}
              />
              <div>
                <p
                  className={cn(
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  )}
                >
                  Nome
                </p>
                <p
                  className={cn(
                    "font-medium",
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  )}
                >
                  {user?.fullName || "Não informado"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope
                className={cn(
                  "w-5 h-5",
                  theme === "dark" ? "text-gray-200" : "text-gray-500"
                )}
              />
              <div>
                <p
                  className={cn(
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  )}
                >
                  E-mail
                </p>
                <p
                  className={cn(
                    "font-medium",
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  )}
                >
                  {user?.primaryEmailAddress?.emailAddress}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone
                className={cn(
                  "w-5 h-5",
                  theme === "dark" ? "text-gray-200" : "text-gray-500"
                )}
              />
              <div>
                <p
                  className={cn(
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  )}
                >
                  Telefone
                </p>
                <p
                  className={cn(
                    "font-medium",
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  )}
                >
                  {user?.primaryPhoneNumber?.phoneNumber || "Não informado"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Configurações de Conta */}
        <div
          className={cn(
            "shadow-lg rounded-lg p-6 mb-8",
            theme === "dark" ? "bg-black text-white" : "bg-white"
          )}
        >
          <h2
            className={cn(
              "text-xl font-bold mb-6",
              theme === "dark" ? "text-white" : "text-gray-900"
            )}
          >
            Configurações de Conta
          </h2>
          <div className="space-y-4">
            <button
              className={cn(
                "w-full flex items-center gap-4 p-4 rounded-md transition-colors",
                theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-50"
              )}
            >
              <FaLock
                className={cn(
                  "w-5 h-5",
                  theme === "dark" ? "text-gray-200" : "text-gray-500"
                )}
              />
              <span
                className={cn(
                  "font-medium",
                  theme === "dark" ? "text-gray-100" : "text-gray-900"
                )}
              >
                Alterar Senha
              </span>
            </button>
            <button
              className={cn(
                "w-full flex items-center gap-4 p-4 rounded-md transition-colors",
                theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-50"
              )}
            >
              <FaEdit
                className={cn(
                  "w-5 h-5",
                  theme === "dark" ? "text-gray-200" : "text-gray-500"
                )}
              />
              <span
                className={cn(
                  "font-medium",
                  theme === "dark" ? "text-gray-100" : "text-gray-900"
                )}
              >
                Editar Perfil
              </span>
            </button>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className={cn("w-full sm:w-auto px-6 py-3 rounded-md transition-colors", theme === "dark" ? "bg-black hover:bg-blue-900" : "bg-blue-500 text-white hover:bg-blue-800")}>
            Salvar Alterações
          </button>
          <button className={cn("w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-md transition-colors", theme === "dark" ? "bg-red-700 hover:bg-red-800" : "bg-red-500 hover:bg-red-700")}>
            <FaSignOutAlt className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
