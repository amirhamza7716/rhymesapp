import React from 'react'
import './navbar.css';
import { Button } from './ui/button';
import NavbarImg from '@/components/ClientRenderdComponent/NavbarImg';
import NavSearch from '@/components/ClientRenderdComponent/NavSearch';
function Navbar({ Searchid }) {

    return (
        <div className='app__nav'>
            <div className='app__nav-wrapper'>
                <div className='app__nav-p1'>
                    <NavbarImg/>
                    <a href="https://www.amazon.com/Book-Rhymes-Laxative-Creative-Constipation/dp/0991273516/ref=asc_df_0991273516/?tag=hyprod-20&linkCode=df0&hvadid=312057344057&hvpos=1o1&hvnetw=g&hvrand=15892018628531303274&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9010805&hvtargid=pla-570420926371&psc=1"
                        className="app__nav-p3-abtn app__nav-p1-img-nextBtn"
                    >
                        <Button className="app__nav-p3-abtn-btn">Buy Book</Button>
                    </a>
                </div>
                <div className='app__nav-p2'>
                    <div className='app__nav-p2-search'>
                        <NavSearch Searchid={Searchid} />
                    </div>
                </div>
                <div className='app__nav-p3'>
                    <a href="https://www.amazon.com/Book-Rhymes-Laxative-Creative-Constipation/dp/0991273516/ref=asc_df_0991273516/?tag=hyprod-20&linkCode=df0&hvadid=312057344057&hvpos=1o1&hvnetw=g&hvrand=15892018628531303274&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9010805&hvtargid=pla-570420926371&psc=1"
                        className="app__nav-p3-abtn"
                    >
                        <Button className="app__nav-p3-abtn-btn">Buy Book</Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar