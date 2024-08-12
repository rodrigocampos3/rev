  'use client';

  import React, { useState, useEffect } from 'react';
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


  const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState(getVisibleImages());
    const images = [img1, img2, img24, img25, img26, img3, img4, img5, img21, img22];

    function getVisibleImages() {
      if (typeof window !== 'undefined') {
        console.log('window.innerWidth:', window.innerWidth);
        if (window.innerWidth < 768) return 1; // Mobile
        if (window.innerWidth < 1024) return 2; // Tablet
      }
      return 3; // Desktop
    }

    useEffect(() => {
      const handleResize = () => {
        const newVisibleImages = getVisibleImages();
        console.log('Updated visibleImages:', newVisibleImages);
        setVisibleImages(newVisibleImages);
      };

      window.addEventListener('resize', handleResize);

      // Chame handleResize para definir o valor inicial correto
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
      const interval = setInterval(handleNext, 3000); // Muda de imagem a cada 3 segundos
      return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, [currentIndex]);

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex < images.length - visibleImages ? prevIndex + 1 : 0
      );
    };

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : images.length - visibleImages
      );
    };

    return (
      <div className="relative md:h-1/2 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleImages}%)`,
            width: `${(images.length / visibleImages) * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div
              className="w-full sm:w-full md:w-1/3 lg:w-1/4"
              key={index}
            >
              <div className="relative w-full h-full sm:h-96 md:h-72 lg:h-96">
                <Image
                  src={image}
                  alt={`Slide ${index}`}
                  className="rounded-2xl border border-[#EB591E] h-full object-cover"
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
