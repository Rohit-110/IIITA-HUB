import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar transition duration-300 navbar-expand-lg fixed-top ${scrolling ? 'bg-primary' : ''}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand fs-3 ${scrolling ? 'text-white' : ''}`} to="/">
                    IIITA Hub
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link active fs-5 ${scrolling ? 'text-white' : ''}`} aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item fs-5">
                            <Link className={`nav-link ${scrolling ? 'text-white' : ''}`} to="/">
                                Explore
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav fs-5">
                        <li className="nav-item" style={{"margin-right":"7px"}}>
                            <Link className={`nav-link ${scrolling ? 'text-white' : ''}`} to="/signin">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item" style={{"border":`solid ${scrolling ? 'white' : ''} 1px`, "borderRadius": "5px"}}>
                            <Link className={`nav-link ${scrolling ? 'text-white' : ''}`} to="/signup">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
