import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { ParticleEffect } from "@/components/effects/ParticleEffect";
import SearchBar from "@/components/home/searchBar";
import Carousel from "@/components/home/carousel";
import { cn } from "@/utils/utils";
import { useTheme } from "@/hooks/useTheme";

export default function Hero() {
  const { theme } = useTheme();
  return (
    <section
      className="flex flex-col sm:flex-row h-[calc(100vh-4.5rem)] bg-cover bg-center overflow-hidden relative"
      style={{
        backgroundImage:
          "url(https://149795021.v2.pressablecdn.com/wp-content/uploads/2013/11/Digital-Black-Wallpapers.jpg)",
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Efeito de partículas */}
      <ParticleEffect />

      {/* Barra de pesquisa */}
      <SearchBar />

      {/* Carrossel no lado esquerdo (ou acima em mobile) */}
      <div className="flex justify-center sm:justify-start items-center w-full sm:w-1/2 h-full sm:pl-20 sm:pt-60 pt-25 relative z-10">
        <Carousel />
      </div>

      {/* Nova div no lado direito (ou abaixo em mobile) */}
      <div className="flex flex-col justify-center items-center sm:items-end w-full sm:w-1/2 h-full sm:pr-30 sm:pt-25 p-4 relative z-10">
        {/* Contêiner com efeito cyber */}
        <div
          className={cn(
            "p-6 sm:p-8 rounded-xl border border-blue-500/60 shadow-[0_0_15px_rgba(0,191,255,0.6)] max-w-lg relative overflow-hidden",
            theme === "dark"
              ? "bg-blue-500/10 backdrop-blur-md"
              : "bg-blue-500/30 backdrop-blur-lg"
          )}
        >
          {/* Efeito de neon circulando as bordas */}
          <div className="absolute inset-0 rounded-xl border border-blue-400/30 animate-pulse"></div>

          {/* Ícone e título */}
          <div className="flex flex-row items-center sm:items-center sm:justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/042/567/316/non_2x/vip-icon-3d-rendering-element-vip-member-icon-illustration-png.png"
              alt="Exclusive Feature"
              className="w-16 drop-shadow-[0_0_10px_rgba(0,191,255,0.8)]"
            />
            <h2 className="text-blue-300 text-2xl sm:text-3xl font-bold text-center sm:ml-4 drop-shadow-[0_0_10px_rgba(0,191,255,0.8)]">
              Exclusive on the App
            </h2>
          </div>

          {/* Descrição */}
          <p className="text-blue-200 text-base sm:text-lg mb-6 pt-4 text-center sm:text-center">
            Download now and enjoy exclusive features on your mobile device!
          </p>

          {/* Botões de download */}
          <div className="flex flex-row sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="group relative hover:opacity-80 transition-opacity"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                alt="App Store"
                className="h-10 sm:h-12 group-hover:scale-105 transition-transform"
              />
            </a>
            <a
              href="#"
              className="group relative hover:opacity-80 transition-opacity"
            >
              <img
                src="https://logodownload.org/wp-content/uploads/2017/04/disponivel-google-play-badge.png"
                alt="Google Play"
                className="h-10 sm:h-12 group-hover:scale-105 transition-transform"
              />
            </a>
          </div>

          {/* Efeito de partículas brilhando no fundo */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-16 h-16 bg-blue-500/30 blur-2xl rounded-full top-10 left-10 animate-ping"></div>
            <div className="absolute w-24 h-24 bg-blue-400/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
