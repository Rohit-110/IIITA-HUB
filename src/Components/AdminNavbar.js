import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import noti from '../noti.png';
import noti2 from '../noti2.png';

export default function AdminNavbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSignOut = () => {
        window.location.href = '/';
    };

    return (
        <header
            id="header"
            className={`z-1 fixed top-0 left-0 right-0 d-flex align-items-center ${scrolled ? 'scrolled bg-white' : ''}`}
            style={{ transition: 'background-color 0.3s, color 0.3s' }}
        >
            <div className="container d-flex align-items-center justify-content-between ">
                <h1 className="logo fs-2 pb-1 m-0">
                    <Link to="/admin/home" style={{ textDecoration: 'none', color: scrolled ? '#000' : '#ffffff' }}>
                        IIITA Hub
                    </Link>
                </h1>
                <nav id="navbar" className="navbar">
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item">
                            <Link className="nav-link scrollto p-3 fs-5" to="/admin/profile" style={{ textDecoration: 'none', color: scrolled ? '#000' : '#ffffff' }}>
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link scrollto p-3 fs-5" to="/admin/contact" style={{ textDecoration: 'none', color: scrolled ? '#000' : '#ffffff' }}>
                                Contact Us
                            </Link>
                        </li>
                        <li className="nav-item dropdown ml-4">
                            <Link to="/admin/notifications"><span className="nav-link" style={{ cursor: 'pointer', color: scrolled ? '#000000' : '#ffffff' }}>
                                <img className="mt-2 w-8" src={scrolled ? noti : noti2} alt="noti" />
                            </span></Link>
                        </li>
                        <li className="nav-item ml-3">
                            <button onClick={handleSignOut} className="nav-link btn btn-danger p-3 fs-5" style={{ textDecoration: 'none', color: scrolled? '#000000' : '#ffffff' }}>
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
