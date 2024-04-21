import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import noti from '../noti.png';
import noti2 from '../noti2.png';
import Notifications from './Notifications';
import Dropdown from './Dropdown';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    let timeout;

    const handleMouseEnter = () => {
        clearTimeout(timeout);
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        timeout = setTimeout(() => {
            setShowDropdown(false);
        }, 400); 
        
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    const handleSignOut = () => {
        window.location.href = '/signin';
    };

    return (
        <header
            id="header"
            className={`z-1 fixed top-0 left-0 right-0 d-flex align-items-center ${scrolled ? 'scrolled bg-white' : ''}`}
            style={{ transition: 'background-color 0.3s, color 0.3s' }}
        >
            <div className="container d-flex align-items-center justify-content-between ">
                <h1 className="logo fs-2 pb-1 m-0">
                    <Link to="/" style={{ textDecoration: 'none', color: scrolled ? '#000' : '#ffffff' }}>
                        IIITA Hub
                    </Link>
                </h1>
                <nav id="navbar" className="navbar">
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item">
                            <Link className="nav-link scrollto p-3 fs-5" to="/search" style={{ textDecoration: 'none', color: scrolled ? '#000' : '#ffffff' }}>
                                Explore
                            </Link>
                        </li>
                        <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <span className="nav-link dropdown-toggle p-3 fs-5" id="navbarDropdownMenuLink" style={{ textDecoration: 'none', color: scrolled ? '#000' : '#ffffff' }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Recruiters
                            </span>
                            <Dropdown showDropdown={showDropdown} className="mr-10" />
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link scrollto p-3 fs-5" to="/profile" style={{ textDecoration: 'none', color: scrolled ? '#000' : '#ffffff' }}>
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link scrollto p-3 fs-5" to="/contact" style={{ textDecoration: 'none', color: scrolled ? '#000' : '#ffffff' }}>
                                Contact Us
                            </Link>
                        </li>
                        <li className="nav-item dropdown ml-4" onMouseEnter={toggleNotifications} onMouseLeave={toggleNotifications}>
                            <Link to="/notifications"><span className="nav-link" style={{ cursor: 'pointer', color: scrolled ? '#000000' : '#ffffff' }}>
                                <img className="mt-2 w-8" src={scrolled ? noti : noti2} alt="noti" />
                            </span></Link>
                            <Notifications showNotifications={showNotifications}/>
                        </li>
                        <li className="nav-item ml-3">
                            <button onClick={handleSignOut} className="nav-link btn btn-danger p-3 fs-5" style={{ textDecoration: 'none', color: '#ffffff' }}>
                                Sign Out
                            </button>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
}
