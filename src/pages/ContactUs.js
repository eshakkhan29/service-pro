import React from 'react';
import PageBanner from '../components/common/PageBanner';

const ContactUs = () => {
    return (
        <div>
            <PageBanner text={"Contact us"} />
            <div className='pageBgPatten'>
                <div className='container px-0 py-4 d-flex align-items-center justify-content-between'>
                    <div className='getInTouch m-auto'>
                        <h1>Get in touch</h1>
                        <p className='mt-3'>T : +1 604-265-8744</p>
                        <p>M : info@serveprojanitorial.ca</p>
                    </div>
                    <div>
                        <iframe
                            className='rounded-3'
                            width={800}
                            height={500}
                            frameborder="0"
                            marginheight="0"
                            marginwidth="0"
                            src="https://maps.google.com/maps?q=chandpur&t=&z=13&ie=UTF8&iwloc=&output=embed">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;