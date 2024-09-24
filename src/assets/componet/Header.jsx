import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    const emailData = {
        buttonText: "Hire Me",
        email:"vk.act2003@gmail.com",
        mailtoLink: "mailto:vk.act2003@gmail.com?subject=Hire%20Me&body=I%20would%20like%20Like%20to%20hire%20you"
    };
        const fileId = '11q0_Q5gTzD6Y3lPZc2qdZwovI6fNcwWs';
        const downloadFile = () =>{
            const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
            window.open(url, '_blank');
        }
    

    const handleClick = () =>{
        window.location.href = emailData.mailtoLink;
    };
    return (
        <div className="container-fluid">
            
            <div className="row mt-3">
                <div className="col-6">
                    <h2 className='text-secondary f-100'>Portfolio</h2>
                </div>
                <div className="col-6 text-end">
                    <Link to='Contact'><button className='message'>Message Me</button></Link>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-6">
                    <img src="./my.png" alt="image" className='myimage' />
                </div>
                <div className="col-lg-6 mt-5">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div>
                            <h1 className='venkat'>I'M VENKATESH</h1><br />
                            <h6 className="sub-head">WEB DEVELOPER | GRAPHIC DESIGNER</h6>
                            <button className='hire mt-4 mx-3' onClick={handleClick}>{emailData.buttonText}</button>
                            <button className="hire mt-3 mx-3" onClick={downloadFile}>Download Resume</button>
                        </div>
                    </div>
                </div>
            </div>
                <div className='container ms-5 mt-5 text-center'>
                    <h1 className='show pt-5'>Show Case</h1>
                    <div className="row mt-5 ">
                        <div className="col-lg-4 col-12 mt-5">
                            <div className="circle d-flex justify-content-center align-items-center">
                            <Link className='navi' to="About"><h5>About me</h5></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mt-5">
                            <div className="circle d-flex justify-content-center align-items-center">
                            <Link className='navi' to="Project"><h5>Project</h5></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mt-5">
                            <div className="circle d-flex justify-content-center align-items-center">
                            <Link className='navi' to="Contact"><h5>Contact</h5></Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
           
        </div>
    )
}

