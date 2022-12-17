import React from 'react';

const AboutGoals = () => {
    return (
        <div className='container p-lg-0 d-flex flex-column flex-lg-row justify-content-between gap-4 mb-5'>
            <div className='aboutDetails w-100'>
                <h2 className='sub-heading'>Our Vision</h2>
                <p>To lead the residential and commercial cleaning industry by providing the highest level of customer service and quality of work. Our goal is to delight each and every one of our customers by meeting their specific cleaning requirements using our stringent operating standards.</p>
            </div>
            <div className='aboutDetails w-100'>
                <h2 className='sub-heading'>Our Mission</h2>
                <p>To provide first-class cleaning services through an unparalleled level of professionalism, supported by a flexible online and offline approach so you can make time for what matters most: YOU!</p>
            </div>
            <div className='aboutDetails w-100'>
                <h2 className='sub-heading'>Our Values</h2>
                <div className='d-flex flex-column gap-2'>
                    <p className='m-0'><strong>People:</strong>  Our business is people</p>
                    <p className='m-0'><strong>Pride:</strong> We take pride in what we do</p>
                    <p className='m-0'><strong>Reliability:</strong>  We do what we say we’ll do</p>
                    <p className='m-0'><strong> Team:</strong> We bring out the best in each other</p>
                    <p className='m-0'><strong>Quality:</strong> We constantly improve</p>
                </div>
            </div>
        </div>
    );
};

export default AboutGoals;