// components/ParticleEffect.tsx
import { motion } from "framer-motion";

export function ParticleEffect() {
  // Símbolos e valores monetários
  const currencySymbols = ["$", "€", "¥", "₿", "Ξ", "£", "₽", "₹", "₩"];
  const currencyValues = [
    "100",
    "500",
    "1000",
    "0.01",
    "0.05",
    "0.1",
    "1",
    "5",
    "10",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => {
        // Escolhe um símbolo ou valor aleatório
        const symbol =
          currencySymbols[Math.floor(Math.random() * currencySymbols.length)];
        const value =
          currencyValues[Math.floor(Math.random() * currencyValues.length)];
        const displayText = Math.random() > 0.5 ? `${symbol}${value}` : symbol; // Alterna entre símbolo e valor

        const delay = Math.random() * 2; // Delay inicial variado
        const size = Math.random() * 20 + 10; // Tamanho aleatório entre 10 e 30

        return (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center text-blue-200 font-bold"
            style={{
              fontSize: `${size}px`, // Tamanho aleatório
              left: `${Math.random() * 100}%`, // Posição horizontal aleatória
              filter: "drop-shadow(0 0 8px rgba(173, 216, 230, 0.8))", // Brilho azul
            }}
            initial={{
              y: Math.random() * -window.innerHeight, // Começa em posições aleatórias acima da tela
              opacity: 0,
              rotate: Math.random() * 360, // Rotação inicial aleatória
            }}
            animate={{
              y: window.innerHeight + 100, // Cai até abaixo da tela
              opacity: [0, 1, 0], // Aparece e desaparece suavemente
              rotate: Math.random() * 360, // Rotação durante a animação
            }}
            transition={{
              duration: Math.random() * 5 + 5, // Duração variada
              repeat: Infinity,
              ease: "linear",
              delay,
            }}
          >
            {displayText}
          </motion.div>
        );
      })}
    </div>
  );
}
