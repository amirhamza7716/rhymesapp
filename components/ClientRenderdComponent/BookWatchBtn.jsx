"use client"
import React from 'react'
import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function BookWatchBtn({ setVideoId, setModalIsOpen }) {
    return (
        <Button className="App_Booksec-button group" data-aos="zoom-in" onClick={() => { setModalIsOpen(true); setVideoId("6A1JyZDR9Vo") }}>
            WATCH VIDEO
            <FontAwesomeIcon className="App_Booksec-button-arrow hidden group-hover:inline-block w-4 h-4 ml-2" icon={faChevronRight} />
        </Button>
    )
}

export default BookWatchBtn