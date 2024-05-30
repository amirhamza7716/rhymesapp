import React from 'react'
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import FooterForm from '@/components/ClientRenderdComponent/FooterForm';

function Footer() {
    return (
        <div className="app__footer">
            <div className="container ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="footer-header text-xl app__footer-lititle">ABOUT</div>
                        <div className="mt-2"><div className='app__footer-firsttext'>Book of Rhymes is a reference tool that helps songwriters, poets, and other creative writers to quickly find words that rhyme. It features many types of words; slang, phrases, famous people, things, and places. It also includes many types of rhymes; "Exact Rhyme" (ex. Cat, Hat), "Family Rhyme" (ex. Google, poodle), and "Slant Rhyme" (ex. Orange, foreign). Founded by Romane Armand, Guinness World Record holder of <i>Longest Freestyle Rap</i>, this website is an extension of his paperback book titled, <i>Book of Rhymes: A Laxative for Creative Constipation</i>.</div></div>
                    </div>
                    <div>
                        <div className="footer-header text-xl app__footer-lititle">Newsletter</div>
                        <div className="mt-4">
                            <FooterForm/>
                        </div>
                    </div>
                    <div>
                        <div className="footer-header text-xl app__footer-lititle">stay connected</div>
                        <div className="mt-4 app__footer__icons">
                            <a href="mailto:hello@bookofrhymes.com" className="app__footer__icons-a"><FontAwesomeIcon className='footer__icon' icon={faEnvelope} /></a>
                            <a href="https://www.facebook.com/bookofrhymes/" target="_blank" className="app__footer__icons-a"><FontAwesomeIcon className='footer__icon' icon={faFacebook} /></a>
                            <a href="https://twitter.com/bookofrhymes" target="_blank" className="app__footer__icons-a"> <FontAwesomeIcon className='footer__icon' icon={faTwitter} /></a>
                            <a href="https://www.youtube.com/user/bookofrhymes" target="_blank" className="app__footer__icons-a"> <FontAwesomeIcon className='footer__icon' icon={faYoutube} /></a>
                            <a href="https://www.instagram.com/bookofrhymes/" target="_blank" className="app__footer__icons-a"><FontAwesomeIcon className='footer__icon' icon={faInstagram} /></a>
                        </div>
                    </div>
                </div>
                <div className='app__footer-bookstext-footer'>
                    <div className='app__footer-bookstext-footer-text'>© 2024 BOOK OF RHYMES. ALL RIGHTS RESERVED.</div>
                </div>
            </div>
        </div>

    )
}

export default Footer