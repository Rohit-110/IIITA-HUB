import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Signup.css';
import Back from '../Components/Back';
import Background from '../Components/Background';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle sign in submission here
  };

  return (
    <div className="mainContainer">
      <div className='absolute left-0 bottom-20 h-screen'>
        <Background />
      </div>
      <div className='absolute left-4 top-4'>
        <Back />
      </div>
      <div className="titleContainer absolute inset-0 bottom-96">
        <b>Welcome back!</b>
      </div>
      <div className='absolute right-0 m-16'>
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="buttonContainer">
              <button type="submit" className="registerButton">
                Sign In
              </button>
            </div>
            <div>
              New user? Click <Link to="/signup">here</Link> to Sign Up.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
