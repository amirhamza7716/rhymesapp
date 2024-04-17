import React from 'react';
import ReactModal from 'react-modal';
import './VideoModal.css';
// 8hkcqQEjwOw
// https://www.youtube.com/embed/6A1JyZDR9Vo?autoplay=1
// https://www.youtube.com/embed/8hkcqQEjwOw?autoplay=1
const VideoModal = ({ isOpen, onRequestClose, videoId }) => {
    console.log(videoId);
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal"
            overlayClassName="overlay"
        >
            <div className='VIDEO-MODAL'>
                <div className="VIDEO-MODAL-CorseBtn">
                    {/* <button className="text-red-500" onClick={onRequestClose}>
                        Close
                    </button> */}
                    <img className="VIDEO-MODAL-CorseBtn-img" src="/images/mcross.png"  alt="*" onClick={onRequestClose}/>
                </div>
                {/* <div className="video-container"> */}
                    {videoId !== null && (
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title="YouTube video player"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    )}
                {/* </div> */}
            </div>
        </ReactModal>
    );
};

export default VideoModal;