'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import img1 from '../../../public/carrousel/1.jpg';
import img2 from '../../../public/carrousel/10.jpg';
import img3 from '../../../public/carrousel/3.jpg';
import img4 from '../../../public/carrousel/4.jpg';
import img5 from '../../../public/carrousel/5.jpg';
import img21 from '../../../public/carrousel/6.jpg';
import img22 from '../../../public/carrousel/7.jpg';
import img24 from '../../../public/carrousel/10.jpg';
import img25 from '../../../public/carrousel/11.jpg';
import img26 from '../../../public/carrousel/12.jpg';

const Carousel2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img24, img25, img26, img3, img4, img5, img21, img22];

  
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Muda de imagem a cada 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [handleNext]);

  useEffect(() => {
    const handleResize = () => {
      // Ajusta o índice da imagem atual quando a tela for redimensionada
      setCurrentIndex((prevIndex) => prevIndex % images.length);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden w-full h-64">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 10}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((image, index) => (
          <div className=" flex-shrink" key={index}>
            <Image
              src={image}
              alt={`Slide ${index}`}
              layout="responsive"
              width={220}
              height={100}
              className="w-full h-full"
            />
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

export default Carousel2;
