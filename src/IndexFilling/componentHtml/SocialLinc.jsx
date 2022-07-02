import React from 'react';
import Twitter from '../../imj/twitter.png';
import Telegram from '../../imj/telegram.png';
import Discord from '../../imj/discord.svg'

const SocialLinc = () => {
    return (
        <div className="app__desctiption__socials">
            <div className="desctiption__socials">
                <a href="https://twitter.com/expanding_space" target="_blank" >
                    <img className="social_hover" src={Twitter} alt="upss" />
                </a>               
            </div>

            <div className="desctiption__socials">
                <a href="https://t.me/expandingspace" target="_blank" >
                    <img className="social_hover" src={Telegram} alt="upss" />
                </a>              
            </div>

            <div className="desctiption__socials">
               <a href="https://discord.com/invite/yJHn4nG7ud" target="_blank" >
                  <img className="social_hover" src={Discord} alt="upss" />
               </a>                
            </div>
        </div>
    );
};

export default SocialLinc;
 