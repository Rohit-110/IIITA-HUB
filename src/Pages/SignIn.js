import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  /*const [isLoginForm, setIsLoginForm] = useState(true);*/
  const [isAlumni, setIsAlumni] = useState(false); // State to track whether user is alumni or not

  const handleSignIn = () => {
    // Logic to handle sign-in
    console.log('Signing in...');
  };

  const handleRegister = () => {
    // Logic to handle registration
    console.log('Registering...');
  };

  /*const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login or register logic here
  };
*/
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      {/* Left Half */}
      <div className="left-half p-4">
        <h2>Welcome to IIITA Hub</h2>
        <p>Empowering Innovations</p>
        {/* Add any additional content for the left half here */}
      </div>

      {/* Right Half */}
      <div className="container w-20">
      <h2 className="text-center mt-5 mb-4">Sign In</h2>
      <div className="d-flex justify-content-center">
        <div className="btn-group mb-4" role="group" aria-label="Sign in or Register">
          <button
            type="button"
            className={`btn ${!isAlumni ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setIsAlumni(false)}
          >
            Sign In
          </button>
          <button
            type="button"
            className={`btn ${isAlumni ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setIsAlumni(true)}
          >
            Register
          </button>
        </div>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        {isAlumni && (
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="alumniCheck" />
            <label className="form-check-label" htmlFor="alumniCheck">Are you an alumni?</label>
          </div>
        )}
        <button type="button" className="btn btn-primary" onClick={isAlumni ? handleRegister : handleSignIn}>
          {isAlumni ? 'Register' : 'Sign In'}
        </button>
      </form>
      <div className="text-center mt-3">
        <p>Don't have an account? <Link to="/register">{isAlumni ? 'Sign up as Alumni' : 'Sign up'}</Link></p>
      </div>
    </div>

    </div>
  );
};

export default SignIn;
