import second from "@/assets/2.png";
import third from "@/assets/3.png";

interface Product {
  id: number;
  discount: string;
  image: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
}

export const productsData: Product[] = [
    {
      id: 1,
      discount: "-20%",
      image:
        "https://coingape.com/wp-content/uploads/2024/07/Cryptos-To-Buy2.webp",
      name: "Course 1",
      description: "Lorem ipsum dolor.",
      price: 2000,
      originalPrice: 2500,
    },
    {
      id: 2,
      discount: "-15%",
      image: second,
      name: "Course 2",
      description: "Lorem ipsum dolor.",
      price: 2125,
      originalPrice: 2500,
    },
    {
      id: 3,
      discount: "-10%",
      image: third,
      name: "Course 3",
      description: "Lorem ipsum dolor.",
      price: 2250,
      originalPrice: 2500,
    },
    {
      id: 4,
      discount: "-5%",
      image:
        "https://assets.entrepreneur.com/content/3x2/2000/1650662757-Ent-AdvancedCryptoTradingBundle.jpeg",
      name: "Course 4",
      description: "Lorem ipsum dolor.",
      price: 2375,
      originalPrice: 2500,
    },
    {
      id: 5,
      discount: "-5%",
      image:
        "https://solutionsreview.com/security-information-event-management/files/2021/05/Cybersecurity-Certifications.jpg",
      name: "Course 4",
      description: "Lorem ipsum dolor.",
      price: 2375,
      originalPrice: 2500,
    },
  ];