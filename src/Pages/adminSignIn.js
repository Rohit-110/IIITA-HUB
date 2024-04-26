import React, { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../index';
import { server } from '../index';
import axios from 'axios';
import toast from 'react-hot-toast';

const AdminSignIn = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [name, setname] = useState('');
    const [mobile, setmobile] = useState('');
  
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let { data } = await axios.post(`${server}/admin/new`, {
                email, password, name, mobile
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            toast.success("Logged In Successfully");
            setIsAuthenticated(true);
            window.location.href = '/admin/home';
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };
    

    return (
        <div clas>
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
                    <div>
                        <h2 className="text-center text-3xl font-bold text-gray-800">Sign in as Admin</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                        </div>
                        <div className="w">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                value={name}
                                onChange={(e)=>{setname(e.target.value)}}
                            />
                        </div>
                        <div className="flex space-x-4">
                            {/* Phone Number Input */}
                            <div className="w-full">
                                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    id="mobile"
                                    name="mobile"
                                    type="tel"
                                    autoComplete="tel"
                                    required
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    value={mobile}
                                    onChange={(e)=>{setmobile(e.target.value)}}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                value={password}
                                onChange={(e)=>{setpassword(e.target.value)}}
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full p-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign In
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminSignIn;
