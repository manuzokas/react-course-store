import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/utils";

export default function AboutPage() {
  const { theme } = useTheme();

  return (
    <section
      className={cn(
        "h-[calc(100vh-4.5rem)] flex flex-col items-center justify-center bg-cover bg-center relative overflow-hidden",
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      )}
      style={{
        backgroundImage:
          "url(https://149795021.v2.pressablecdn.com/wp-content/uploads/2013/11/Digital-Black-Wallpapers.jpg)",
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Container principal */}
      <div
        className={cn(
          "w-full max-w-5xl p-8 sm:p-10 rounded-xl border-2 border-blue-500/30 backdrop-blur-md relative overflow-hidden",
          theme === "dark" ? "bg-black/20" : "bg-white/80"
        )}
        style={{
          boxShadow: "0 0 20px rgba(0, 191, 255, 0.6)",
        }}
      >
        {/* Título */}
        <h1
          className={cn(
            "text-4xl sm:text-5xl font-bold text-center mb-8",
            theme === "dark"
              ? "text-blue-300 drop-shadow-[0_0_10px_rgba(0,191,255,0.8)]"
              : "text-blue-600"
          )}
        >
          Sobre Nós
        </h1>

        {/* Layout em duas colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Coluna 1: Descrição */}
          <div
            className={cn(
              "space-y-6 text-lg sm:text-xl",
              theme === "dark" ? "text-blue-200" : "text-blue-600"
            )}
          >
            <p>
              Bem-vindo ao futuro da <strong>cybersecurity</strong>! Somos uma
              plataforma dedicada a fornecer os melhores recursos e
              conhecimentos para proteger o mundo digital.
            </p>
            <p>
              Nossa missão é capacitar indivíduos e empresas a enfrentar os
              desafios cibernéticos com confiança, oferecendo ebooks, cursos e
              ferramentas de alta qualidade.
            </p>
            <p>
              Acreditamos que a segurança digital é um direito de todos, e
              estamos aqui para tornar isso possível.
            </p>
          </div>

          {/* Coluna 2: Equipe */}
          <div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-bold text-center mb-8",
                theme === "dark"
                  ? "text-blue-300 drop-shadow-[0_0_10px_rgba(0,191,255,0.8)]"
                  : "text-blue-600"
              )}
            >
              Nossa Equipe
            </h2>
            <div className="flex flex-col items-center gap-6">
              {/* Membro 1 */}
              <div
                className={cn(
                  "p-6 rounded-xl border-2 border-blue-500/30 backdrop-blur-md w-full max-w-xs",
                  theme === "dark" ? "bg-blue-700/10" : "bg-white/80"
                )}
              >
                <img
                  src="https://img.freepik.com/vetores-premium/icone-de-adesao-prateada-icone-de-perfil-de-avatar-padrao-icone-de-associacao-imagem-de-usuario-de-midia-social-ilustracao-vetorial_561158-4215.jpg?semt=ais_hybrid"
                  alt="Membro 1"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-center text-blue-300">
                  Manuella Rodrigues
                </h3>
                <p className="text-center text-blue-200">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
