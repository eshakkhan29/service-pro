import React from 'react';

const PageBanner = ({text}) => {
    return (
        <div className='pageBanner'>
            <h1 className='m-0'>{text}</h1>
        </div>
    );
};

export default PageBanner;