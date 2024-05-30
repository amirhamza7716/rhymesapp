import React from 'react'
import Image from 'next/image';
import './BookSection.css';
import BookImg from '../public/images/img/book_rhymes_coverB-1-1280x700.jpg';
import BookWatchBtn from '@/components/ClientRenderdComponent/BookWatchBtn';

function BookSection({ setVideoId, setModalIsOpen }) {
    return (
        <div className='App_Booksec'>
            <Image
                className="App_Booksec-backgroundimg"
                src={BookImg}
                alt="img"
                layout='fill'
            />
            <div className='Booksec-wordSec' >
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