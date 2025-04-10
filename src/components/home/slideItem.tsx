import { FC } from 'react';
import { IconType } from 'react-icons';

interface SlideItemProps {
  icon: IconType;
  text: string;
}

const SlideItem: FC<SlideItemProps> = ({ icon, text }) => (
  <div className="flex items-center space-x-4">
    <div className="text-3xl text-blue-200">{icon({})}</div>
    <p className="text-sm md:text-base text-blue-200">{text}</p>
  </div>
);

export default SlideItem;