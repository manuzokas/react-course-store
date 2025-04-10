import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/utils";
import ProductList from "@/components/home/productList";
import { productsData } from "@/const/productsData";
import { useState, useEffect
 } from "react";

const OurProducts = () => {
  const { theme } = useTheme();
  // Estado para o timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); // Define o fim da oferta para 2 dias a partir de agora

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={cn(
        "flex flex-col p-10 items-center justify-center gap-8 relative z-10", // Adicionei z-10 aqui
        theme === "dark" ? "bg-black" : "bg-gray-200"
      )}
    >
      <div className="flex flex-col md:flex-col md:gap-5 items-center justify-end">
        <h2
          className={`text-4xl font-bold text-center md:text-left flex items-center gap-2 ${
            theme === "dark"
              ? "text-blue-200 drop-shadow-[0_0_10px_rgba(0,191,255,0.8)]"
              : "text-blue-900 drop-shadow-[0_0_10px_rgba(0,0,139,0.8)]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Temporary Offers!
        </h2>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span
            className={`text-lg font-semibold ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Offer ends in:
          </span>
          <div className="flex gap-2">
            <div
              className={`backdrop-blur-md rounded-lg p-2 text-center ${
                theme === "dark" ? "bg-gray-800/80" : "bg-white/80"
              }`}
            >
              <span className="text-xl font-bold text-red-600">
                {timeLeft.days}
              </span>
              <span
                className={`block text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Days
              </span>
            </div>
            <div
              className={`backdrop-blur-md rounded-lg p-2 text-center ${
                theme === "dark" ? "bg-gray-800/80" : "bg-white/80"
              }`}
            >
              <span className="text-xl font-bold text-red-600">
                {timeLeft.hours}
              </span>
              <span
                className={`block text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Hours
              </span>
            </div>
            <div
              className={`backdrop-blur-md rounded-lg p-2 text-center ${
                theme === "dark" ? "bg-gray-800/80" : "bg-white/80"
              }`}
            >
              <span className="text-xl font-bold text-red-600">
                {timeLeft.minutes}
              </span>
              <span
                className={`block text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Min
              </span>
            </div>
            <div
              className={`backdrop-blur-md rounded-lg p-2 text-center ${
                theme === "dark" ? "bg-gray-800/80" : "bg-white/80"
              }`}
            >
              <span className="text-xl font-bold text-red-600">
                {timeLeft.seconds}
              </span>
              <span
                className={`block text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Sec
              </span>
            </div>
          </div>
        </div>
      </div>

      <ProductList products={productsData} />
    </section>
  );
};

export default OurProducts;
