import React, { useState }  from 'react';
import { FaUser, FaLock } from "react-icons/fa"
import { MdEmail } from 'react-icons/md';

//firebase imports

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth }  from "../../firebase"//import firebase cinfigurations

const LoginRegister = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // state to hold success/failure messages
  
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
        })
        .catch((error) => {
          setMessage(`Login error: ${error.message}`);
        });
    };
  
    return (
      <div className="relative w-full h-screen bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: 'url(./assets/bg.jpeg)' }}>
        <div className="relative backdrop-blur-sm bg-black/70 rounded-lg shadow-lg overflow-hidden">
          <div className="backdrop-blur-sm bg-black/30 p-10">
            
            <div className="flex flex-col justify-center items-center">
              
              {/* Show success or failure message */}
              {message && (
                <div className="mb-4 text-center text-white">
                  {message}
                </div>
              )}
  
              {/* Login Form */}
              {!isRegistering && (
                <form className="w-full" onSubmit={handleLoginSubmit}>
                  <h1 className="text-2xl text-center mb-4 text-white">Login</h1>
                  <div className="relative w-full h-[45px] my-5">
                    <input 
                      type="email" 
                      placeholder="Email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-full bg-transparent border-2 border-opacity-10 border-white rounded-full text-white text-sm pl-4 pr-10 outline-none" 
                    />
                    <MdEmail className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-white" />
                  </div>
                  <div className="relative w-full h-[45px] my-5">
                    <input 
                      type="password" 
                      placeholder="Password" 
                      required 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-full bg-transparent border-2 border-opacity-10 border-white rounded-full text-white text-sm pl-4 pr-10 outline-none" 
                    />
                    <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-white" />
                  </div>
                  <div className="flex justify-between text-xs my-2">
                    <label className="flex items-center text-white">
                      <input type="checkbox" className="accent-white mr-1" /> Remember me?
                    </label>
                    <a href="#" className="hover:underline text-white">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full h-[40px] bg-white rounded-full shadow-md text-gray-800 font-bold">Login</button>
                  <div className="text-xs text-center my-4 text-white">
                    <p>Don't have an account? <a href="#" onClick={handleRegisterClick} className="font-semibold hover:underline">Register</a></p>
                  </div>
                </form>
              )}
  
              {/* Register Form */}
              {isRegistering && (
                <form className="w-full" onSubmit={handleRegistrationSubmit}>
                  <h1 className="text-2xl text-center mb-4 text-white">Register</h1>
                  <div className="relative w-full h-[45px] my-5">
                    <input 
                      type="text" 
                      placeholder="Username" 
                      required 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full h-full bg-transparent border-2 border-opacity-10 border-white rounded-full text-white text-sm pl-4 pr-10 outline-none" 
                    />
                    <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-white" />
                  </div>
                  <div className="relative w-full h-[45px] my-5">
                    <input 
                      type="email" 
                      placeholder="Email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-full bg-transparent border-2 border-opacity-10 border-white rounded-full text-white text-sm pl-4 pr-10 outline-none" 
                    />
                    <MdEmail className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-white" />
                  </div>
                  <div className="relative w-full h-[45px] my-5">
                    <input 
                      type="password" 
                      placeholder="Password" 
                      required 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-full bg-transparent border-2 border-opacity-10 border-white rounded-full text-white text-sm pl-4 pr-10 outline-none" 
                    />
                    <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-white" />
                  </div>
                  <div className="flex justify-between text-xs my-2">
                    <label className="flex items-center text-white">
                      <input type="checkbox" className="accent-white mr-1" /> I agree to the terms & conditions
                    </label>
                  </div>
                  <button type="submit" className="w-full h-[40px] bg-white rounded-full shadow-md text-gray-800 font-bold">Register</button>
                  <div className="text-xs text-center my-4 text-white">
                    <p>Already have an account? <a href="#" onClick={handleLoginClick} className="font-semibold hover:underline">Login</a></p>
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
  