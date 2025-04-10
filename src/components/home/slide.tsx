import SlideItem from "@/components/home/slideItem";
import { IconType } from "react-icons";

interface SlideProps {
  title: React.ReactNode;
  items: { icon: IconType; text: string }[];
}

const Slide = ({ title, items }: SlideProps) => (
  <li className="glide__slide flex flex-col items-center justify-center text-center">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-blue-200">
      {title}
    </h2>
    <div className="flex flex-col space-y-4">
      {items.map((item, index) => (
        <SlideItem key={index} icon={item.icon} text={item.text} />
      ))}
    </div>
  </li>
);

export default Slide;