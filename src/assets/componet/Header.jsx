import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    const emailData = {
        buttonText: "Hire Me",
        email: "vk.act2003@gmail.com",
        mailtoLink: "mailto:vk.act2003@gmail.com?subject=Hire%20You&body=I%20would%20like%20to%20hire%20you"
    };
    const fileId = '11q0_Q5gTzD6Y3lPZc2qdZwovI6fNcwWs';
    const downloadFile = () => {
        const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
        window.open(url, '_blank');
    }
   

    const handleClick = () => {
        window.location.href = emailData.mailtoLink;
    };
    return (
        <div className="container-fluid">

            <div className="row ">
                <div className="col-6">
                    <img src="logo.png" alt="logo" width={100} className='mylogo' />
                </div>
                <div className="col-6 pt-4 text-end">
                    <Link to='Contact'><button className='btn btn-warning fs-6'>Message Me</button></Link>
                </div>
            </div>
            <div className="row poly ">
                <div className="col-lg-6 col-12 text-center position-relative">
                    <img src="/my.png" alt="back" className='img-fluid w-50' />

                </div>
                <div className="col-lg-6 col-12">
                    <div className="d-flex justify-content-center align-items-center my-3 h-100">
                        <div>
                            <h1 className='fs-1 text-center text-warning badge'>I'M VENKATESH</h1><br />
                            <h6 className=" text-center ">WEB DEVELOPER | GRAPHIC DESINGER</h6>
                            <div className='text-center'>
                                <button className='btn btn-warning mt-3 mx-2 ' onClick={handleClick}>{emailData.buttonText}</button>
                                <button className=" btn btn-light mt-3" onClick={downloadFile}>Download Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row bg-dark p-3 my-3">
                <div className="col-4 text-center">
                    <span>Responsive</span>
                </div>
                <div className="col-4 text-center">
                    <span>Interactive</span>
                </div>
                <div className="col-4 text-center">
                    <span>Dynamic</span>
                </div>
            </div>
            <div className='container-fluid mt-2'>
                <h1 className='show pt-3'>Show Case</h1>
                <div className="row mx-5">
                    <div className="col-lg-4 col-12 mt-2">
                        <div className="circle d-flex justify-content-center align-items-center my-3">
                            <Link className='navi' to="About"><h5>About me</h5></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-2">
                        <div className="circle d-flex justify-content-center align-items-center my-3">
                            <Link className='navi' to="Project"><h5>Project</h5></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-2">
                        <div className="circle d-flex justify-content-center align-items-center my-3">
                            <Link className='navi' to="Contact"><h5>Contact</h5></Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

