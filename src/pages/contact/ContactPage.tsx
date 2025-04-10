import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/utils";
import { ParticleEffect } from "@/components/effects/ParticleEffect";
import Faq from "@/pages/contact/Faq";

export default function ContactPage() {
  const { theme } = useTheme();

  return (
    <div>
        <Faq />
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

        {/* Efeito de partículas (opcional, se você já tiver um componente) */}
        <ParticleEffect />

        {/* Container principal */}
        <div
          className={cn(
            "w-full max-w-4xl p-8 sm:p-12 rounded-xl border border-blue-500/60 shadow-[0_0_15px_rgba(0,191,255,0.6)] relative overflow-hidden backdrop-blur-md",
            theme === "dark" ? "bg-blue-500/10" : "bg-blue-500/30"
          )}
        >
          {/* Efeito de neon circulando as bordas */}
          <div className="absolute inset-0 rounded-xl border border-blue-400/30 animate-pulse"></div>

          {/* Título */}
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-blue-300 drop-shadow-[0_0_10px_rgba(0,191,255,0.8)]">
            Contact Us
          </h1>

          {/* Descrição */}
          <p className="text-lg sm:text-xl text-blue-200 text-center mb-12">
            Have questions or need support? Reach out to us! We're here to help
            you with anything related to cybersecurity.
          </p>

          {/* Formulário de contato */}
          <form className="space-y-6">
            {/* Campo de nome */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-blue-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={cn(
                  "mt-1 block w-full p-3 rounded-md border border-blue-500/60 bg-transparent text-blue-200 placeholder-blue-400/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                  theme === "dark" ? "bg-blue-500/10" : "bg-blue-500/20"
                )}
                placeholder="Enter your name"
              />
            </div>

            {/* Campo de email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={cn(
                  "mt-1 block w-full p-3 rounded-md border border-blue-500/60 bg-transparent text-blue-200 placeholder-blue-400/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                  theme === "dark" ? "bg-blue-500/10" : "bg-blue-500/20"
                )}
                placeholder="Enter your email"
              />
            </div>

            {/* Campo de mensagem */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-blue-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={cn(
                  "mt-1 block w-full p-3 rounded-md border border-blue-500/60 bg-transparent text-blue-200 placeholder-blue-400/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                  theme === "dark" ? "bg-blue-500/10" : "bg-blue-500/20"
                )}
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* Botão de envio */}
            <div className="flex justify-center">
              <button
                type="submit"
                className={cn(
                  "w-full sm:w-auto px-8 py-3 rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-colors shadow-[0_0_15px_rgba(0,191,255,0.6)]",
                  theme === "dark" ? "bg-blue-500/80" : "bg-blue-500"
                )}
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Efeito de partículas brilhando no fundo */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-16 h-16 bg-blue-500/30 blur-2xl rounded-full top-10 left-10 animate-ping"></div>
            <div className="absolute w-24 h-24 bg-blue-400/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
