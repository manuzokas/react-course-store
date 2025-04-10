import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/utils";

export default function PlansSection() {
  const { theme } = useTheme();

  // Dados dos planos
  const plans = [
    {
      name: "Plano Básico",
      price: "R$ 29,90/mês",
      features: [
        "Acesso a 5 ebooks por mês",
        "Suporte por e-mail",
        "Atualizações mensais",
      ],
      bestValue: false,
    },
    {
      name: "Plano Intermediário",
      price: "R$ 59,90/mês",
      features: [
        "Acesso a 15 ebooks por mês",
        "Suporte por e-mail e chat",
        "Atualizações semanais",
        "Desconto em cursos",
      ],
      bestValue: true, // Destaca este plano como o melhor valor
    },
    {
      name: "Plano Avançado",
      price: "R$ 99,90/mês",
      features: [
        "Acesso ilimitado a todos os ebooks",
        "Suporte prioritário 24/7",
        "Atualizações diárias",
        "Desconto em cursos e mentorias",
        "Acesso a conteúdo exclusivo",
      ],
      bestValue: false,
    },
  ];

  return (
    <section
      className={cn(
        "min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-6 sm:p-12 relative overflow-hidden",
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
      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Título */}
        <h1
          className={cn(
            "text-4xl sm:text-5xl font-bold text-center mb-8",
            theme === "dark"
              ? "text-blue-300 drop-shadow-[0_0_10px_rgba(0,191,255,0.8)]"
              : "text-blue-600"
          )}
        >
          Escolha Seu Plano
        </h1>

        {/* Cards de Planos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "rounded-xl border-2 border-blue-500/30 backdrop-blur-md p-8 flex flex-col transition-all duration-300 hover:scale-105",
                theme === "dark" ? "bg-black/20" : "bg-white/80",
                plan.bestValue
                  ? "shadow-[0_0_20px_rgba(0,191,255,0.8)] border-blue-500/60"
                  : ""
              )}
            >
              {/* Nome do Plano */}
              <h2
                className={cn(
                  "text-2xl font-bold text-center mb-4",
                  theme === "dark" ? "text-blue-300" : "text-blue-600"
                )}
              >
                {plan.name}
              </h2>

              {/* Preço */}
              <p
                className={cn(
                  "text-3xl font-bold text-center mb-6",
                  theme === "dark" ? "text-blue-400" : "text-blue-700"
                )}
              >
                {plan.price}
              </p>

              {/* Lista de Recursos */}
              <ul className="flex-1 space-y-4 mb-6">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={cn(
                      "flex items-center gap-2",
                      theme === "dark" ? "text-blue-200" : "text-blue-600"
                    )}
                  >
                    <span
                      className={cn(
                        "w-2 h-2 rounded-full",
                        theme === "dark" ? "bg-blue-400" : "bg-blue-600"
                      )}
                    ></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Botão de Assinar */}
              <button
                className={cn(
                  "w-full py-3 rounded-lg font-semibold transition-colors duration-300",
                  plan.bestValue
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-500/50 hover:bg-blue-600 text-white"
                )}
              >
                Assinar Agora
              </button>

              {/* Destaque para o melhor valor */}
              {plan.bestValue && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-bl-lg rounded-tr-xl text-sm font-bold">
                  Melhor Valor
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}