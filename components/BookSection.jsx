import React from 'react'
import Image from 'next/image';
import './BookSection.css';
import BookImg from '../public/images/img/book_rhymes_coverB-1-1280x700.jpg';
import BookWatchBtn from '@/components/ClientRenderdComponent/BookWatchBtn';

function BookSection({ setVideoId, setModalIsOpen }) {
    return (
        <div className='App_Booksec'>
            {/* <div className='App_Booksec-backgroundimg' /> */}
            <Image
                className="App_Booksec-backgroundimg"
                src={BookImg}
                alt="img"
                layout='fill'
            />
            <div className='Booksec-wordSec'>
                <div className='Booksec-wordSec-wrapper'>
                    <div className='Booksec-wordSec-title'>
                        FIND WORDS
                    </div>
                    <div className='Booksec-wordSec-subtitle'>
                        THAT RHYME
                    </div>
                    <div className='Booksec-wordSec-disc'>
                        <div className='Booksec-wordSec-disc-text'>
                            Songwriters and poets, inspire your creativity with over 50,000 rhymes, including phrases, slang, and near rhymes.
                        </div>
                    </div>
                    <div className='App_Booksec-divbutton'>
                        <div className='App_Booksec-divbutton-adj'>
                            {/* <Button className="App_Booksec-button">WATCH VIDEO 
                            <FontAwesomeIcon className='App_Booksec-button-arrow' icon={faChevronRight} />
                            </Button> */}
                            {/* <Button className="App_Booksec-button group" onClick={() => { setModalIsOpen(true); setVideoId("6A1JyZDR9Vo") }}>
                                WATCH VIDEO
                                <FontAwesomeIcon className="App_Booksec-button-arrow hidden group-hover:inline-block w-4 h-4 ml-2" icon={faChevronRight} />
                            </Button> */}
                            <BookWatchBtn setVideoId={setVideoId} setModalIsOpen={setModalIsOpen}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='App_Booksec-secdot'>
                <div className='Booksec-secdot-bot'>
                    <div className='Booksec-secdot-bot-inner'>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default BookSection