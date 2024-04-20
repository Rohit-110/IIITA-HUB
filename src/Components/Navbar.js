import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import noti from '../noti.png';
import noti2 from '../noti2.png';
import Notifications from './Notifications';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

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

    return (
        <header
            id="header"
            className={`z-1 fixed top-0 left-0 right-0 d-flex align-items-center ${scrolled ? 'scrolled bg-white' : ''}`}
            style={{ transition: 'background-color 0.3s, color 0.3s' }}
        >
            <div className="container d-flex align-items-center justify-content-between ">
                <h1 className="logo fs-2 pb-1 m-0">
                    <Link to="/" style={{ textDecoration: 'none', color: scrolled ? '#000' : '#ffffff' }}>
                        IIITA Hub<span></span>
                    </Link>
                </h1>
                <nav id="navbar" className="navbar">
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item">
                            <Link className="nav-link scrollto p-3 fs-5" to="/search" style={{ textDecoration: 'none', color: scrolled ? '#000' : '#ffffff' }}>
                                Explore
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle p-3 fs-5" id="navbarDropdownMenuLink" style={{ textDecoration: 'none', color: scrolled ? '#000' : '#ffffff' }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Recruiters
                            </span>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/companies">Companies</Link></li>
                                <li><Link className="dropdown-item" to="/stats">Statistics</Link></li>
                            </ul>
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
                        <li className="nav-item dropdown ml-4" onMouseEnter={toggleNotifications} onMouseLeave={toggleNotifications} onClick={<Notifications/>}>
                            <span className="nav-link" style={{ cursor: 'pointer', color: scrolled ? '#000000' : '#ffffff' }}>
                                <img className="mt-2 w-8" src={scrolled ? noti : noti2} alt="noti" />
                            </span>
                            <Notifications showNotifications={showNotifications} className="mr-10" />
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
}
