import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../ui/button';

function ProfileVideoBtn({setModalIsOpen,setVideoId}) {
    return (
        <Button className="p_right-button group" onClick={() => { setModalIsOpen(true); setVideoId("8hkcqQEjwOw") }}>
            WATCH VIDEO
            <FontAwesomeIcon className="p_right-button-arrow hidden group-hover:inline-block w-4 h-4 ml-2" icon={faChevronRight} />
        </Button>
    )
}

export default ProfileVideoBtn