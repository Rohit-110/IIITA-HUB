import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Context, server } from '../index.js';
import { Link } from 'react-router-dom';


const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [name, setname] = useState('');
  const [isAlumni, setisAlumni] = useState('');
  const [mobile, setmobile] = useState('');
  const [degree, setdegree] = useState('');
  const [batchYear, setbatchYear] = useState('');
  const [resumeLink, setresumeLink] = useState('');
  const [photo, setphoto] = useState('');

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios.post(`${server}/student/new`, {
        email, password, confirmPassword, name, isAlumni, mobile, degree, batchYear, resumeLink
      }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      toast.success("Logged In Successfully");
      setIsAuthenticated(true);
      if (isAlumni === "true") window.location.href = '/alumHome';
      else window.location.href = '/home';
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };


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
          <div>
            <h2 className="text-center text-3xl font-bold text-gray-800">Create an account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">Or{' '}
              <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 hover:text-blue-700">
                <Link style={{ "textDecoration": "none" }} to="/login">login to your account</Link>
              </button>
            </p>
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
                onChange={(e) => { setEmail(e.target.value) }}
              />
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
                onChange={(e) => { setpassword(e.target.value) }}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={confirmPassword}
                onChange={(e) => { setconfirmPassword(e.target.value) }}
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
                onChange={(e) => { setname(e.target.value) }}
              />
            </div>
            <div className="flex space-x-4">
              {/* Phone Number Input */}
              <div className="w-1/2">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
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
                  onChange={(e) => { setmobile(e.target.value) }}
                />
              </div>

              {/* Alumni Select Input */}
              <div className="w-1/2">
                <label htmlFor="isAlumni" className="block text-sm font-medium text-gray-700">
                  Are you an alumni?
                </label>
                <select
                  id="isAlumni"
                  name="isAlumni"
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={isAlumni}
                  onChange={(e) => { setisAlumni(e.target.value) }}
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
            </div>
            <div>
              <div className="flex space-x-4">
                {/* Degree Input */}
                <div className="w-1/2">
                  <label htmlFor="degree" className="block text-sm font-medium text-gray-700">
                    Degree
                  </label>
                  <input
                    id="degree"
                    name="degree"
                    type="text"
                    autoComplete="degree"
                    required
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={degree}
                    onChange={(e) => { setdegree(e.target.value) }}
                  />
                </div>

                {/* Batch Year Input */}
                <div className="w-1/2">
                  <label htmlFor="batchYear" className="block text-sm font-medium text-gray-700">
                    Batch Year
                  </label>
                  <input
                    id="batchYear"
                    name="batchYear"
                    type="text"
                    autoComplete="batch-year"
                    required
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={batchYear}
                    onChange={(e) => { setbatchYear(e.target.value) }}
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <input
                id="photo"
                name="photo"
                type="tel"
                autoComplete="tel"
                required
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={photo}
                onChange={(e) => { setphoto(e.target.value) }}
              />
            </div>
            <div>
              <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-700">
                Resume Link
              </label>
              <input
                id="resumeLink"
                name="resumeLink"
                type="url"
                autoComplete="resume-link"
                required
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={resumeLink}
                onChange={(e) => { setresumeLink(e.target.value) }}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
