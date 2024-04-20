import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Signup.css'

export default function Back() {
    return (
        <div className='bg-white-100'>
            <Link to="/" className="back-link">
                <button className='p-1 w-10 back-button'>
                    <img src="https://cdn-icons-png.flaticon.com/256/0/340.png" alt="Back" />
                    <span className="hover-text">Go Back</span>
                </button>
            </Link>
        </div>
    );
}

