import React, { useState, useEffect } from 'react';
import slider1 from '../../assets/images/slider-desktop.png'
import slider2 from '../../assets/images/slider2.png'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const images = [
  slider1,
  slider2
];

const SliderImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);
    return () => clearInterval(intervalId);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative bg-cover bg-center h-screen mt-5" 
      style={{ backgroundImage: `url(${images[currentIndex]})` }}>
     
      <FaChevronLeft  onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl
        md:text-6xl"
        aria-label="Previous"/>
      
      <FaChevronRight onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white text-4xl
        md:text-6xl"
        aria-label="Next"/>
    </div>
  );
};

export default SliderImage;
