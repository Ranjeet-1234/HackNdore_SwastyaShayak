// src/components/ImageSlider.tsx
import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

type ImageSliderProps = {
  images: string[];
  interval?: number; // Optional interval prop for the slide transition time
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 3000 }) => {
  const [current, setCurrent] = useState(0); // State to track the current slide index
  const length = images.length;

  useEffect(() => {
    // Automatically move to the next slide after the specified interval
    const timer = setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, interval);

    // Clear the timer on component unmount or when dependencies change
    return () => clearTimeout(timer);
  }, [current, length, interval]);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Return null if the images array is empty or not an array
  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <section className="relative flex justify-center items-center h-72 w-full">
      {/* Left arrow for previous slide */}
      <FaArrowAltCircleLeft 
        className="absolute left-0 text-3xl text-white cursor-pointer select-none z-10" 
        onClick={prevSlide} 
      />
      {/* Right arrow for next slide */}
      <FaArrowAltCircleRight 
        className="absolute right-0 text-3xl text-white cursor-pointer select-none z-10" 
        onClick={nextSlide} 
      />
      {/* Map over images array to display each image */}
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
