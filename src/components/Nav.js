import React, { useState, useEffect } from 'react';
import LoginButton from './LoginButton';
import Auth from './Auth';
import { Link, BrowserRouter } from "react-router-dom"
import '../App.css';

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`NavBar ${show && "nav__black"}`}>
            <BrowserRouter>
                <Link to ="/">
                    <img
                        className="Nav__logo"
                        src="https://seeklogo.com/images/N/nba-logo-59F0731E03-seeklogo.com.png"
                        alt="NBA Logo"
                    />
                </Link>
            </BrowserRouter>
            <Auth />
           
        </div>
    )
}

export default Nav