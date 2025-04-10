import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard, { Product } from "@/components/home/productCard";
import "@/styles/ProductList.css";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [paginationRendered, setPaginationRendered] = useState(false);

  useEffect(() => {
    setPaginationRendered(true);
  }, []);

  return (
    <div className="w-full max-w-6xl px-5 relative" style={{ height: "400px" }}>
      {/* Setas personalizadas */}
      <div className="swiper-button-prev-custom"></div>
      <div className="swiper-button-next-custom"></div>

      {paginationRendered && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Paginação personalizada */}
      <div className="custom-pagination"></div>
    </div>
  );
};

export default ProductList;
