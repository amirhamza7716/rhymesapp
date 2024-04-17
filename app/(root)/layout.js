"use client"
import React, { useState } from 'react'
import './home.css';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';
import BookSection from '@/components/BookSection';
import InformationSec from '@/components/InformationSec';
import Profile from '@/components/Profile';
import BuyShopSec from '@/components/BuyShopSec';
import VideoModal from '@/components/VideoModal';

function Layout({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [VideoId, setVideoId] = useState(null)
  return (
    <div className='Home'>
      <div className='Home-line'></div>
      <div>{children}</div>
      <BookSection setVideoId={setVideoId} setModalIsOpen={setModalIsOpen} />
      <InformationSec />
      <Profile setVideoId={setVideoId} setModalIsOpen={setModalIsOpen} />
      <BuyShopSec />
      <Testimonial />
      <Footer />

      <a href="mailto:hello@bookofrhymes.com?subject=Book%20of%20Rhymes%20Feedback" className="move-to-bottom-right">
        <button >
          Leave Feedback
        </button>
      </a>

      <VideoModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} videoId={VideoId} />
    </div>
  )
}

export default Layout;