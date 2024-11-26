import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase/firebase"; // Import firebase configurations
import { useNavigate } from 'react-router-dom';
import loginImg from "../../assets/images/login.avif"
const LoginRegister = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // State to hold success/failure messages
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        setIsRegistering(true);
        setMessage(''); // Clear any existing messages
    };

    const handleLoginClick = () => {
        setIsRegistering(false);
        setMessage(''); // Clear any existing messages
    };

    // Registration form submit handler
    const handleRegistrationSubmit = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setMessage('Registration successful!');
                navigate('/');
            })
            .catch((error) => {
                setMessage(`Registration error: ${error.message}`);
            });
    };

    // Login form submit handler
    const handleLoginSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setMessage('Login successful! Welcome back.');
                navigate('/');
            })
            .catch((error) => {
                setMessage(`Login error: ${error.message}`);
            });
    };

    return (
        <div className="w-full h-screen flex">
            {/* Image Section */}
            <div className="hidden md:flex w-1/2 h-full bg-gray-300 items-center justify-center">
                <div className="w-3/4 h-3/4 bg-gray-400 rounded-lg flex items-center justify-center">
                    <img src={loginImg} alt="the login image " className='w-full' />
                </div>
            </div>

            {/* Form Section */}
            <div className="w-full md:w-1/2 h-full flex justify-center items-center bg-lime-500">
                <div className="w-full max-w-md px-6 py-10 bg-white rounded-lg shadow-lg">
                    <div className="flex flex-col justify-center items-center">
                        {/* Show success or failure message */}
                        {message && (
                            <div className="mb-4 text-center text-black">
                                {message}
                            </div>
                        )}

                        {/* Login Form */}
                        {!isRegistering && (
                            <form className="w-full" onSubmit={handleLoginSubmit}>
                                <h1 className="text-2xl text-center mb-4 text-lime-600">Login</h1>
                                <div className="relative w-full h-[45px] my-5">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full h-full bg-transparent border-2 border-opacity-50 border-lime-500 rounded-full text-black text-sm pl-4 pr-10 outline-none"
                                    />
                                    <MdEmail className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-lime-600" />
                                </div>
                                <div className="relative w-full h-[45px] my-5">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full h-full bg-transparent border-2 border-opacity-50 border-lime-500 rounded-full text-black text-sm pl-4 pr-10 outline-none"
                                    />
                                    <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-lime-600" />
                                </div>
                                <div className="flex justify-between text-xs my-2">
                                    <label className="flex items-center text-black">
                                        <input type="checkbox" className="accent-lime-500 mr-1" /> Remember me?
                                    </label>
                                    <a href="#" className="hover:underline text-lime-600">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full h-[40px] bg-lime-500 rounded-full shadow-md text-white font-bold">Login</button>
                                <div className="text-xs text-center my-4 text-black">
                                    <p className='text-sm'>Don't have an account? <a href="#" onClick={handleRegisterClick} className="font-semibold hover:underline text-lime-600">Register</a></p>
                                </div>
                            </form>
                        )}

                        {/* Register Form */}
                        {isRegistering && (
                            <form className="w-full" onSubmit={handleRegistrationSubmit}>
                                <h1 className="text-2xl text-center mb-4 text-lime-600">Register</h1>
                                <div className="relative w-full h-[45px] my-5">
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        required
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="w-full h-full bg-transparent border-2 border-opacity-50 border-lime-500 rounded-full text-black text-sm pl-4 pr-10 outline-none"
                                    />
                                    <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-lime-600" />
                                </div>
                                <div className="relative w-full h-[45px] my-5">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full h-full bg-transparent border-2 border-opacity-50 border-lime-500 rounded-full text-black text-sm pl-4 pr-10 outline-none"
                                    />
                                    <MdEmail className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-lime-600" />
                                </div>
                                <div className="relative w-full h-[45px] my-5">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full h-full bg-transparent border-2 border-opacity-50 border-lime-500 rounded-full text-black text-sm pl-4 pr-10 outline-none"
                                    />
                                    <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-lime-600" />
                                </div>
                                <div className="flex justify-between text-xs my-2">
                                    <label className="flex items-center text-black">
                                        <input type="checkbox" className="accent-lime-500 mr-1" /> I agree to the terms & conditions
                                    </label>
                                </div>
                                <button type="submit" className="w-full h-[40px] bg-lime-500 rounded-full shadow-md text-white font-bold">Register</button>
                                <div className="text-xs text-center my-4 text-black">
                                    <p className='text-sm'>Already have an account? <a href="#" onClick={handleLoginClick} className="font-semibold hover:underline text-lime-600">Login</a></p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;
