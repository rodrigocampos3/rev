'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import img0 from '../../../public/DSC03267.jpg';
import img1 from '../../../public/DSC02915.jpg';
import img2 from '../../../public/DSC03066.jpg';
import img4 from '../../../public/DSC03311.jpg';
import img3 from '../../../public/DSC03341.jpg';
import img20 from '../../../public/DSC03320.jpg';
import img6 from '../../../public/DSC03307.jpg';
import img8 from '../../../public/DSC03290.jpg';
import img11 from '../../../public/DSC03271.jpg';
import img5 from '../../../public/DSC03243.jpg';






const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img0, img1, img2, img3, img4, img5, ];
  const visibleImages = 5; // Quantidade de imagens visíveis ao mesmo tempo

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); // Muda de imagem a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-1/2 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * (100 / visibleImages))}%)`,
          width: `${images.length * (100 / visibleImages)}%`,
        }}
      >
        {images.map((image, index) => (
          <div className="flex-shrink-0 w-full md:w-1/3" key={index}>
            <div className="relative w-full">
              <Image
                src={image}
                alt={`Slide ${index}`}
                className="rounded-2xl border border-[#EB591E] h-auto"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
