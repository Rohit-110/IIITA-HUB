import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Signup.css';
import Back from '../Components/Back';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        conpassword: ''
    });

    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'password') {
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
            if (!value || !passwordRegex.test(value)) {
                setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.');
            } else {
                setPasswordError('');
            }
        }

        if (name === 'conpassword') {
            if (value !== formData.password) {
                setConfirmPasswordError('Passwords do not match.');
            } else {
                setConfirmPasswordError('');
            }
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Additional client-side validation
        if (!passwordError && !confirmPasswordError && isFormFilled()) {
            // Example: registerUser(formData).then(() => navigate('/login'));
        }
    };

    const isFormFilled = () => {
        for (const key in formData) {
            if (!formData[key]) {
                return false;
            }
        }
        return true;
    };

    return (
        <div className='mainContainer'>
            <div className='absolute left-4 top-4'><Back /></div>
            <div className="titleContainer">
                <b>Welcome to IIITA Hub!</b>
            </div>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <div className="inputGroup">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
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
                        <label htmlFor="mobile">Mobile:</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
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
                        {passwordError && <p className="error">{passwordError}</p>}
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="conpassword">Confirm password:</label>
                        <input
                            type="password"
                            id="conpassword"
                            name="conpassword"
                            value={formData.conpassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
                    <div className="buttonContainer">
                        <button type="submit" className="registerButton" disabled={!isFormFilled()}>
                            Register
                        </button>
                    </div>
                    <div>
                        Already a user? Click <Link to='/signin'>here</Link> to login
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
