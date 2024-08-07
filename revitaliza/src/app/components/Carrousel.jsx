'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import img0 from '../../../public/DSC03267.jpg';
import img1 from '../../../public/DSC02915.jpg';
import img2 from '../../../public/DSC03311.jpg';
import img3 from '../../../public/g10.png';
import img4 from '../../../public/DSC03311.jpg';



const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img0, img1, img2, img3, img4]; // Adicione mais imagens conforme necessário

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const visibleImages = 5; // Quantidade de imagens visíveis

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex % (images.length - visibleImages + 1)) * (100 / visibleImages)}%)`,
          width: `${(images.length / visibleImages) * 100}%`,
        }}
      >
        {images.map((image, index) => (
          <div className="flex-shrink-0 w-full md:w-1/3 border  rounded-2xl" key={index}>
            <div className="relative w-full h-full rounded-2xl"> {/* Ajuste a altura aqui */}
              <Image
                src={image}
                alt={`Slide ${index}`}
                 // Ajusta a imagem para preencher o contêiner
                className="object-cover rounded-2xl border border-[#EB591E]" // Cobre o contêiner sem distorcer
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
