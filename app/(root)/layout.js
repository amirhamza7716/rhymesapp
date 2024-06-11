"use client"
import React, { useState, useEffect } from 'react';
import './home.css';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';
import BookSection from '@/components/BookSection';
import InformationSec from '@/components/InformationSec';
import Profile from '@/components/Profile';
import BuyShopSec from '@/components/BuyShopSec';
import VideoModal from '@/components/VideoModal';
import Image from 'next/image';
import HamePageTitleimg from '../../public/images/book_of_rhymes.png';



// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="spinner">
    {/* You can customize the spinner with CSS or use a library like react-spinners */}
    <Image
        src={HamePageTitleimg}
        alt="Description of the image"
        className='spinner_img'
        layout='cover'
        objectFit='fill'
      />
  </div>
);

function Layout({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [VideoId, setVideoId] = useState(null)
  const [isChildrenLoaded, setIsChildrenLoaded] = useState(false);
  const [isComponentsLoaded, setIsComponentsLoaded] = useState(false);
 

  

  useEffect(() => {
    // Simulate the loading of children after images are loaded
    if (children) {
      const timer = setTimeout(() => setIsChildrenLoaded(true), 2000); // 500ms delay
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [children]);

  useEffect(() => {
    // Load other components after children are loaded
    if (isChildrenLoaded) {
      const timer = setTimeout(() => setIsComponentsLoaded(true), 500); // 500ms delay
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [isChildrenLoaded]);

  return (
    <div className='Home'>
      <div className='Home-line'></div>

      {/* Render Loading Spinner or Children */}
      
      {!isChildrenLoaded && <LoadingSpinner /> }
      <div> {children}</div>
      
      {/* Render other components only after children is loaded */}
      {isComponentsLoaded && (
        <>
          <BookSection setVideoId={setVideoId} setModalIsOpen={setModalIsOpen} />
          <InformationSec />
          <Profile setVideoId={setVideoId} setModalIsOpen={setModalIsOpen} />
          <BuyShopSec />
          <Testimonial />
          <Footer />
        </>
      )}

      <a href="mailto:hello@bookofrhymes.com?subject=Book%20of%20Rhymes%20Feedback" className="move-to-bottom-right">
        <button>
          Leave Feedback
        </button>
      </a>

      {/* Video Modal should be present but its visibility controlled */}
      <VideoModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} videoId={VideoId} />
    </div>
  );
}

export default Layout;


