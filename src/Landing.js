import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            
            <div className="contact-details">
                <img className="portfolio-picture" src="../public/selie.png"></img>
                <div>
                    Eric Blaney
                </div>
                <div>
                    Fullstack Software Engineer
                </div>
                <div>
                    EricBlaney@gmail.com
                </div>
                <div>
                    631-521-3981
                </div>
                <div>
                    Astoria, NY
                </div>
            </div>
        </div>
    )
}

export default Landing;