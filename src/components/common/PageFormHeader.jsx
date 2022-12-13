import React from 'react';

const PageFormHeader = ({ title }) => {
    return (
        <div className='formPageHeader border-bottom'>
            <h1>{title}</h1>
            <h2>Request a Quote in 60 Seconds</h2>
            <p>
                Fill in the questions below and we'll call you back instantly with a quote
            </p>
        </div>
    );
};

export default PageFormHeader;