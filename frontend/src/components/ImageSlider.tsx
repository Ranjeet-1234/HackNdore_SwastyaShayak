// src/components/ImageSlider.tsx
import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

type ImageSliderProps = {
  images: string[];
  interval?: number;
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, interval);
    return () => clearTimeout(timer);
  }, [current, length, interval]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <section className="relative flex justify-center items-center h-72 w-full">
      <FaArrowAltCircleLeft 
        className="absolute left-0 text-3xl text-white cursor-pointer select-none z-10" 
        onClick={prevSlide} 
      />
      <FaArrowAltCircleRight 
        className="absolute right-0 text-3xl text-white cursor-pointer select-none z-10" 
        onClick={nextSlide} 
      />
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          {index === current && (
            <img src={image} alt={`slide-${index}`} className="w-full h-full object-cover" />
          )}
        </div>
      ))}
    </section>
  );
};

export default ImageSlider;
