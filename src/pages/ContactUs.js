import React from 'react';
import PageBanner from '../components/common/PageBanner';
import { MdMail, MdPhone } from 'react-icons/md';

const ContactUs = () => {
    const handelFormSubmit = (e) => {
        e.preventDefault()
        const fullName = e.target.fillName.value;
        const email = e.target.email.value;
        const massage = e.target.massage.value;
        console.log({ fullName, email, massage })
    }
    return (
        <div>
            <PageBanner text={"Contact us"} />
            <div className='pageBgPatten'>
                <div className='container px-lg-0 py-5 d-flex flex-column flex-lg-row align-items-center justify-content-center gap-4 gap-lg-0'>
                    <div className='getInTouch w-100 d-flex align-items-center justify-content-center'>
                        <div>
                            <h1>Get in touch</h1>
                            <p className='mt-3 d-flex align-items-center'><MdPhone className=' me-3' />+1 604-265-8744</p>
                            <p className=' d-flex align-items-center'><MdMail className=' me-3' />service@serveprojanitorial.ca </p>
                        </div>
                    </div>
                    <div className='w-100'>
                        <form
                            onSubmit={handelFormSubmit}
                            className='d-flex flex-column gap-3 bg-white p-4 rounded-3 shadow-sm'>
                            <div className='inputForm d-flex flex-column'>
                                <label className='mb-2' htmlFor="name">Your Name</label>
                                <input id='name' required type="text" name='fillName' placeholder='Full name' />
                            </div>
                            <div className='inputForm d-flex flex-column'>
                                <label className='mb-2' htmlFor="email">Your Email</label>
                                <input id='email' required type="text" name='name' placeholder='Email' />
                            </div>
                            <div className='inputForm d-flex flex-column'>
                                <label className='mb-2' htmlFor="massage">Your Massage</label>
                                <textarea name="massage" required id="massage" placeholder='Massage' cols="30" rows="5"></textarea>
                            </div>
                            <button className='contactButton' type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;