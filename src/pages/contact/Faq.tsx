import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/utils";
import { ParticleEffect } from "@/components/effects/ParticleEffect";

export default function FAQPage() {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Dados das perguntas e respostas
  const faqs = [
    {
      question: "O que é cybersecurity?",
      answer:
        "Cybersecurity é a prática de proteger sistemas, redes e programas contra ataques digitais. Esses ataques geralmente visam acessar, alterar ou destruir informações confidenciais, extorquir dinheiro dos usuários ou interromper processos de negócios.",
    },
    {
      question: "Como posso melhorar a segurança dos meus dados?",
      answer:
        "Você pode melhorar a segurança dos seus dados usando senhas fortes, autenticação de dois fatores, mantendo seus softwares atualizados e evitando clicar em links suspeitos.",
    },
    {
      question: "Quais são os tipos mais comuns de ataques cibernéticos?",
      answer:
        "Os tipos mais comuns incluem phishing, malware, ransomware, ataques de negação de serviço (DDoS) e engenharia social.",
    },
    {
      question: "Por que devo me preocupar com cybersecurity?",
      answer:
        "A cybersecurity é essencial para proteger suas informações pessoais e financeiras, bem como para garantir a continuidade dos negócios e a confiança dos clientes.",
    },
    {
      question: "Onde posso aprender mais sobre cybersecurity?",
      answer:
        "Você pode aprender mais sobre cybersecurity através de nossos ebooks, cursos online e artigos especializados disponíveis na plataforma.",
    },
  ];

  // Função para alternar a visibilidade da resposta
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className={cn(
        "h-[calc(100vh-0.5rem)] flex items-center justify-center bg-cover bg-center p-8 relative overflow-hidden",
        theme === "dark" ? "bg-blue-500/40" : "bg-gray-100"
      )}
    >
      {/* Efeito de partículas (opcional, se você já tiver um componente) */}
      <ParticleEffect />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Container principal */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Div com imagem à esquerda */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <img
            src="https://previews.123rf.com/images/stuartphoto/stuartphoto1411/stuartphoto141100006/33351978-pensamento-de-car%C3%A1ter-faq-significa-perguntas-frequentes-e-ajuda.jpg" // Substitua pela URL da sua imagem
            alt="FAQ Illustration"
            className="rounded-xl border-2 border-blue-500/30 shadow-[0_0_20px_rgba(0,191,255,0.6)]"
          />
        </div>

        {/* Seção de FAQs à direita */}
        <div className="lg:w-1/2">
          <div
            className={cn(
              "w-full p-8 rounded-xl border-2 border-blue-500/30 backdrop-blur-md",
              theme === "dark" ? "bg-black/20" : "bg-white/80"
            )}
            style={{
              boxShadow: "0 0 20px rgba(0, 191, 255, 0.6)",
            }}
          >
            {/* Título */}
            <h1
              className={cn(
                "text-4xl font-bold text-center mb-8",
                theme === "dark"
                  ? "text-blue-300 drop-shadow-[0_0_10px_rgba(0,191,255,0.8)]"
                  : "text-blue-600"
              )}
            >
              Frequently Asked{" "}
              <span
                className={cn(theme === "dark" ? "text-white" : "text-black")}
              >
                Questions
              </span>
            </h1>

            {/* Lista de FAQs */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={cn(
                    "rounded-xl border-2 border-blue-500/30 backdrop-blur-md transition-all duration-300",
                    theme === "dark" ? "bg-black/20" : "bg-white/80",
                    activeIndex === index
                      ? "shadow-[0_0_15px_rgba(0,191,255,0.6)]"
                      : ""
                  )}
                >
                  {/* Pergunta */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={cn(
                      "w-full text-left p-6 flex justify-between items-center",
                      theme === "dark" ? "text-blue-200" : "text-black"
                    )}
                  >
                    <span className="text-lg font-semibold">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "transform transition-transform duration-300",
                        activeIndex === index ? "rotate-180" : "rotate-0"
                      )}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Resposta */}
                  {activeIndex === index && (
                    <div
                      className={cn(
                        "p-6 pt-4 border-t border-blue-500/30",
                        theme === "dark" ? "text-blue-200" : "text-blue-600"
                      )}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
