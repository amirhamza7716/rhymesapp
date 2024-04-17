
import React from 'react'
import BackgroundImage from '@/components/BackgroundImage';
import Image from 'next/image';
import HamePageTitleimg from '../../../public/images/Asset-2-p-1080.png'
import SearchComp from '@/components/ClientRenderdComponent/SearchComp';

function HomePage() {

  return (
    <div className='Header-home'>
      <div className='Header-home-imgcon'>
        <BackgroundImage />
      </div>
      <div  className='Header-main'>
      <div className='Header-main-wrapper'>
        <div className="Header-main-divimg">
          {/* <img className="Header-main-img" src="/images/Asset-2-p-1080.png" alt="img" /> */}
          <Image
        src={HamePageTitleimg}
        alt="Description of the image"
        width={400} 
        height={190}
      />
        </div>
        <div className='header-search'>
          {/* <input className='header-search-input' placeholder='What Rhymes Width...' Value={Value} onChange={(e)=>setValue(e.target.value)}/>
          <Button className="header-search-button" onClick={FINDDATA}>Search</Button> */}
          <SearchComp/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HomePage


