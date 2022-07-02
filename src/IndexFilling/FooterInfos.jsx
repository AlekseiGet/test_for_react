import React from 'react';
import  Logo  from "../imj/logo.png";


const FooterInfos = () => {
    return (
        <div className="back_footer">
            <div className="footer_column">
                <div className="footer_column__logo logo">
                    <img src={Logo} alt="upss"/>
                </div>
            </div>
            <div className="footer_column">
                <b>Social Media</b>
                <a href="https://twitter.com/expanding_space" target="_blank" >Twitter</a>
                <a href="https://discord.com/invite/yJHn4nG7ud" target="_blank" >Discord</a>
                <a href="https://t.me/expandingspace" target="_blank" >Telegram</a>
            </div>
            <div className="footer_column">
                <b>About Us</b>
                <a href="https://docs.expandingspace.io/" target="_blank" >Documentation</a>
                <a href="https://evmos.org/" target="_blank" >Evmos</a>
               
            </div>
        </div>
    );
};

export default FooterInfos;