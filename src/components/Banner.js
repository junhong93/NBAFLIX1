import React from 'react';
import '../App.css';



function Banner() {
    return(
        <header className="banner">
             <br /><br /><br /><br /><br /><br /><br /><br />
             <h1 className="banner__title">Raptor's Final</h1>
             <a href="https://www.youtube.com/watch?v=QtUSe8lslqk"><br />
                 <button className="bannerButton" type="button">Play</button>
            </a>
        </header>
    )
}



export default Banner;