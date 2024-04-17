"use client"
import React,{useState,useEffect} from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url = 'https://bookofrhymes.us8.list-manage.com/subscribe/post-json?u=08f18f1264ed9416a402e9bb2&id=0847892b2d';

const CustomFooterForm = ({ status, message, subscribe }) => {
    const [ShowMsg,setShowMsg] = useState(null);
    const [ShowStatus,setShowStatus] = useState(null)
    console.log(status,message)

    useEffect(()=>{
        if(message !== null){
            setShowMsg(message);
            setTimeout(()=>{
                setShowMsg(null);
            },3000)
        }
        if(status !== null){
            setShowStatus(status);
            if(status === "success"){
                setTimeout(()=>{
                    setShowStatus(null);
                },3000)
            }
        }
    },[message,status])
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        subscribe({ EMAIL: email });
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="email"
                    name="email"
                    className="footer-form_input"
                    placeholder="Enter Your Email"
                    required
                />
                <div className="footer-form_input-fbtndiv">
                    <button type="submit" className="footer-form_input-btn cursor-pointer">Subscribe</button>
                </div>
            </form>
            {ShowStatus === 'sending' && <div style={{ color: 'blue' }}>Sending...</div>}
            {ShowStatus === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />}
            {ShowStatus === 'success' && <div style={{ color: 'green' }}>Subscribed!</div>}
            {ShowMsg !== null  && <div style={{ color: 'red' }}>{ShowMsg}</div>}
        </div>
    );
};

const FooterForm = () => (
    <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
            <CustomFooterForm subscribe={subscribe} status={status} message={message} />
        )}
    />
);

export default FooterForm;

