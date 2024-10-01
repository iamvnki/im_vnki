import React from 'react'

export const Footer = () => {
    const textStyle ={
        margin: "0"
    };
    return (
        <div className='container-fluid bg-secondary mt-5 text-center'>
            {/* <img src="logo.png" alt="footerimage" width={100} /> */}
            <p className='p-2 ' style={textStyle}>
                Copyright @ 2024. All Rights Reserved by <span className='text-warning'>iamvnki</span>
            </p>
        </div>
    )
}
