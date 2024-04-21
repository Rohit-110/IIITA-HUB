import React, { useState } from 'react';
import Footer from '../Components/Footer';

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    isAlumni: false,
    phoneNumber: '',
    degree: '',
    batchYear: '',
    resumeLink: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const emailPattern = /^[a-zA-Z0-9._%+-]+@iiita\.ac\.in$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid IIITA email address");
      return; 
    }

    console.log(formData);
    if(!isLogin && formData.isAlumni) window.location.href = '/alumHome';
    else window.location.href = '/Home';
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
            <h2 className="text-center text-3xl font-bold text-gray-800">{isLogin ? 'Login' : 'Create an account'}</h2>
            <p className="mt-2 text-center text-sm text-gray-600">Or{' '}
              <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 hover:text-blue-700">
                {isLogin ? 'create a new account' : 'login to your account'}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {!isLogin && (
              <>

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
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex space-x-4">
                  {/* Phone Number Input */}
                  <div className="w-1/2">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      autoComplete="tel"
                      required
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      value={formData.phoneNumber}
                      onChange={handleChange}
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
                      value={formData.isAlumni}
                      onChange={handleChange}
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
                        value={formData.degree}
                        onChange={handleChange}
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
                        value={formData.batchYear}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
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
                    value={formData.resumeLink}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            <div>
              <button
                type="submit"
                className="w-full p-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                  {isLogin ? 'Log in' : 'Sign up'}
              </button>

            </div>
          </form>
        </div>
      </div>
      <hr className='m-0' />
      <Footer />
    </div>
  );
};

export default SignIn;
