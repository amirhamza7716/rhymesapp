import React from 'react'
import Image from 'next/image';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import AuthorImg from '../public/images/author.jpg';
import ProfileVideoBtn from '@/components/ClientRenderdComponent/ProfileVideoBtn';

function Profile({ setVideoId, setModalIsOpen }) {
    return (
        <div className='app_Profile'>
            <div className='app_Profile-left'>
                <div className='app_Profile-left-wrapper'>
                    <div className='app_Profile-left-wrapper-lighter'>Now everyone's a poet and they didn't even know it.</div>
                    <div className='app_Profile-left-wrapper-title'>Built for Creatives & Artists to Play.</div>
                    <div className='app_Profile-left-wrapper-disc'>Stop crumpling up paper, deleting old files, scratching out ideas, and going crazy out of frustration. Book of Rhymes is here to save artists from hitting walls. Inspiration is found on every page and your escape is awaiting you. Don’t let language limit your expression, but rather, use it to make you fly.</div>
                </div>
            </div>
            <div className='app_Profile-right'>
                <div className='Profile-right_portion1'>
                    <Image
                         className="Profile-right_portion1_img"
                         src={AuthorImg}
                         alt="img"
                         layout='fill'
                    />
                </div>
                <div className='Profile-right_portion2'>

                    <div className='P-right_portion2_wraper'>
                        <div className='P-right_portion2_wraper_tag'>
                            <FontAwesomeIcon icon={faTrophy} className="App_Booksec-trophy-icon" />
                        </div>
                        <div className='P-right_portion2_wraper_title'>
                            Guinness Record Holder
                        </div>
                        <h4 className='P-right_portion2_wraper_disc'>
                            The author, Romane Armand, marked the publication of his 14-years-in-the-making rhyming dictionary, by setting a 24-hour freestyle rapping record noted by Guinness World Records. Creative brain storming just got better. See for yourself!
                        </h4>
                        <div className='P-right_portion2_wraper_btn'>
                            {/* <Button className="p_right-button group" onClick={() => { setModalIsOpen(true); setVideoId("8hkcqQEjwOw") }}>
                                WATCH VIDEO
                                <FontAwesomeIcon className="p_right-button-arrow hidden group-hover:inline-block w-4 h-4 ml-2" icon={faChevronRight} />
                            </Button> */}
                            <ProfileVideoBtn setModalIsOpen={setModalIsOpen} setVideoId={setVideoId}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile