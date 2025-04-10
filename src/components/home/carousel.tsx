import { useEffect } from "react";
import Glide from "@glidejs/glide";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { slidesData } from "@/const/slidesData";
import Slide from "@/components/home/slide";

const Carousel = () => {
  useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      perView: 1,
      focusAt: "center",
      autoplay: 4000,
      hoverpause: true,
      animationDuration: 800,
      gap: 0,
    }).mount();
  }, []);

  return (
    <div className="glide bg-black/20 bg-opacity-80 rounded-lg p-6 md:p-8 lg:p-12 max-w-xl w-full shadow-2xl">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {slidesData.map((slide, index) => (
            <Slide key={index} title={<span className="text-blue-600">{slide.title}</span>} items={slide.items} />
          ))}
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button
          className="glide__arrow glide__arrow--left absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition-all duration-300"
          data-glide-dir="<"
        >
          <FaChevronLeft className="text-xl text-blue-500" />
        </button>
        <button
          className="glide__arrow glide__arrow--right absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition-all duration-300"
          data-glide-dir=">"
        >
          <FaChevronRight className="text-xl text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
