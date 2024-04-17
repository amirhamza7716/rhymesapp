"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import FirstImg from '../public/images/william-stitt-162607.jpg';
import SecondImg from '../public/images/valentino-funghi-146040.jpg';
import thirdImg from '../public/images/ian-dooley-281855.jpg';
import fourthImg from '../public/images/marina.png';
import fivthImg from '../public/images/Asset-watev.png'


const BackgroundImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [FirstImg, SecondImg, thirdImg, fourthImg, fivthImg];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="background-container">
      <div className="background-overlay"></div>
      {images.map((img, index) => (
        <Image
          className={`background-image ${index === currentIndex ? 'fadeIn' : ''}`}
          key={index}
          src={img}
          alt={`Image ${index + 1}`}
          layout='fill'
        />
      ))}
    </div>
  );
};

export default BackgroundImage;