import React from 'react';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const StuOrAdmin = () => {

    return (
        <div >
            <div className=" min-h-screen flex flex-col md:flex-row items-center justify-center bg-dark">
                {/* Left Side Content */}
                <div className="mb-20 md:w-1/2 p-8 flex flex-col justify-center items-center">
                    <img src="https://www.iiita.ac.in/uploads/carousel/12288_o303.jpg" alt="IIITA Hub Background" className="mb-8 rounded-lg shadow-lg" style={{ maxWidth: '400px' }} />

                    <h1 className="text-4xl font-bold text-white text-center mb-4">Welcome to IIITA Hub</h1>
                    <p className="text-lg text-white text-center mb-8">Connect and collaborate with the IIITA community</p>

                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex items-center space-x-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className=" mb-2.5 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <p className="text-white">Alumni Referrals: Get alumni career support.</p>
                        </div>

                        <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mb-2.5 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <p className="text-white">Networking Events: Expand your professional network.</p>
                        </div>
                    </div>
                </div> 

                {/* Right Side Content */}
                <div className="mr-12 mt-10 mb-20 max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-md">
                <h2 className="text-center text-3xl font-bold text-gray-800">Sign in</h2>
                    <button 
                        className="w-full p-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <Link to="/signin" className='text-white'>Sign in as a Student/Alumni</Link>
                    </button>

                    <button 
                        className="w-full p-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <Link to="/admin/signin" className='text-white'>Sign in as an Admin</Link>
                    </button>
                </div>

            </div >
            <hr className='m-0' />
            <Footer />
        </div >
    );
};

export default StuOrAdmin;