import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase/firebase"; // Import firebase configurations
import { useNavigate } from 'react-router-dom';


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
        .then((userCredential) => {
          setMessage('Registration successful!');

          navigate('/')
        })
        .catch((error) => {
          setMessage(`Registration error: ${error.message}`);
        });
    };
  
    // Login form submit handler
    const handleLoginSubmit = (e) => {
      e.preventDefault();
      
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setMessage('Login successful! Welcome back.');
          navigate('/')
        })
        .catch((error) => {
          setMessage(`Login error: ${error.message}`);
        });
    };
  
    return (
      <div className="relative w-full h-screen bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: 'url(./assets/bg.jpeg)' }}>
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden"> {/* Change to light background */}
          <div className="bg-white p-10"> {/* Change to light background */}
            <div className="flex flex-col justify-center items-center">
              {/* Show success or failure message */}
              {message && (
                <div className="mb-4 text-center text-black"> {/* Change text color to black */}
                  {message}
                </div>
              )}
  
              {/* Login Form */}
              {!isRegistering && (
                <form className="w-full" onSubmit={handleLoginSubmit}>
                  <h1 className="text-2xl text-center mb-4 text-lime-600">Login</h1> {/* Change text color */}
                  <div className="relative w-full h-[45px] my-5">
                    <input 
                      type="email" 
                      placeholder="Email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-full bg-transparent border-2 border-opacity-50 border-lime-500 rounded-full text-black text-sm pl-4 pr-10 outline-none" 
                    />
                    <MdEmail className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-lime-600" /> {/* Change icon color */}
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
                    <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-lime-600" /> {/* Change icon color */}
                  </div>
                  <div className="flex justify-between text-xs my-2">
                    <label className="flex items-center text-black"> {/* Change text color */}
                      <input type="checkbox" className="accent-lime-500 mr-1" /> Remember me?
                    </label>
                    <a href="#" className="hover:underline text-lime-600">Forgot password?</a> {/* Change text color */}
                  </div>
                  <button type="submit" className="w-full h-[40px] bg-lime-500 rounded-full shadow-md text-white font-bold">Login</button> {/* Change button color */}
                  <div className="text-xs text-center my-4 text-black"> {/* Change text color */}
                    <p className='text-sm'>Don't have an account? <a href="#" onClick={handleRegisterClick} className="font-semibold hover:underline text-lime-600">Register</a></p> {/* Change text color */}
                  </div>
                </form>
              )}
  
              {/* Register Form */}
              {isRegistering && (
                <form className="w-full" onSubmit={handleRegistrationSubmit}>
                  <h1 className="text-2xl text-center mb-4 text-lime-600">Register</h1> {/* Change text color */}
                  <div className="relative w-full h-[45px] my-5">
                    <input 
                      type="text" 
                      placeholder="Username" 
                      required 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full h-full bg-transparent border-2 border-opacity-50 border-lime-500 rounded-full text-black text-sm pl-4 pr-10 outline-none" 
                    />
                    <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-lime-600" /> {/* Change icon color */}
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
                    <MdEmail className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-lime-600" /> {/* Change icon color */}
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
                    <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-lime-600" /> {/* Change icon color */}
                  </div>
                  <div className="flex justify-between text-xs my-2">
                    <label className="flex items-center text-black"> {/* Change text color */}
                      <input type="checkbox" className="accent-lime-500 mr-1" /> I agree to the terms & conditions
                    </label>
                  </div>
                  <button type="submit" className="w-full h-[40px] bg-lime-500 rounded-full shadow-md text-white font-bold">Register</button> {/* Change button color */}
                  <div className="text-xs text-center my-4 text-black"> {/* Change text color */}
                    <p className='text-sm'>Already have an account? <a href="#" onClick={handleLoginClick} className="font-semibold hover:underline text-lime-600">Login</a></p> {/* Change text color */}
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
