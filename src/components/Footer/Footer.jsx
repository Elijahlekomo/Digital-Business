import React from "react";
import EmailBox from "../EmailBox/EmailBox";
import './Footer.css'

const Footer = () => {
    return(
        <div className="f-wrapper">            
            <div className="container">
                <div className="f-container">
                    <span className="title">
                        Get funded today!
                    </span>
                    <EmailBox/>

                    <hr />

                    <div className="f-menu">
                        <span>Home</span>
                        <span>what we do</span>
                        <span>how it works</span>
                        <span>who we invest in</span>
                        <span>testimonials</span>
                    </div>

                    <hr />

                    <span className="text">
                      &#169; Copyright Elijah Lekomo. All rights reserved
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer