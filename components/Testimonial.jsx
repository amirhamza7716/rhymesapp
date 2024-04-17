import React from 'react'
import StarIcon from '@/components/StarIcon';
import './testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Testimonial() {

    return (
        <div className='app__testimonial'>
            <div className='app__testimonial-wrapper'>
                <p className='app__testimonial-wrapper-title-main'>Amazon Reviews</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded p-4">
                    <div className="animated  rounded p-4">
                        <span className='app__testimonial-wrapper-title'>
                            <span className='app__testimonial-wrapper-title-h4'>
                                <FontAwesomeIcon className="app__testimonial-wrapper-title-icon" icon={faUserCircle} />&nbsp;Terry Held
                            </span>
                        </span>
                        <StarIcon />
                        <div className="mt-2"><div className='testimonial-wrapper-card-text'>"This book is a compendium of over 50,000 entries that will help relieve bloated writer’s block. They are categorized by vowel sounds and include exact rhymes, family rhymes and slant rhymes. There is even a cross reference for similar rhyming words (l-ady, see aby)."</div></div>
                    </div>
                    <div className="animated fadeInUp rounded p-4">
                        <span className="app__testimonial-wrapper-title">
                            <h4 className='app__testimonial-wrapper-title-h4'>
                                <FontAwesomeIcon className="app__testimonial-wrapper-title-icon" icon={faUserCircle} />&nbsp;Christopher Richardson
                            </h4>
                        </span>
                        <StarIcon />
                        <div className="mt-2"><div className='testimonial-wrapper-card-text'>"What a resource! Imagine taking a common word and linking it to other words that rhyme in a family. Rappers, Poets, Storytellers alike will benefit from the book. Students of the game as well."</div></div>
                    </div>
                    <div className="animated fadeInUp rounded p-4">
                        <span className="app__testimonial-wrapper-title">
                            <h4 className='app__testimonial-wrapper-title-h4'>
                                <FontAwesomeIcon className="app__testimonial-wrapper-title-icon" icon={faUserCircle} />&nbsp;Leslie and Quint
                            </h4>
                        </span>
                        <StarIcon />
                        <div className="mt-2"><div className='testimonial-wrapper-card-text'>"I purchased this book elsewhere. It is well worth the price. As an award-winning songwriter, I can tell you it is unlike and better than any other rhyming dictionary. Better than web sites out there. This is my new go-to when it comes to finding the rhymes I need. It's just a blast to read. Q"</div></div>
                    </div>
                    <div className="animated fadeInU rounded p-4">
                        <span className="app__testimonial-wrapper-title">
                            <h4 className='app__testimonial-wrapper-title-h4'>
                                <FontAwesomeIcon className="app__testimonial-wrapper-title-icon" icon={faUserCircle} />&nbsp;Jeff Walker
                            </h4>
                        </span>
                        <StarIcon />
                        <div className="mt-2"><div className='testimonial-wrapper-card-text'>"Take it from a rhymecologist, there are so many combinations of rhymes and syllables out there, and this book nails them all!! Nothing as extensive out there... try the others I dare you!"</div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial