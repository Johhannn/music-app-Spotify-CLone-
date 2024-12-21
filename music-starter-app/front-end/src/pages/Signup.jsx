import React, { useState } from 'react';
import {AudioLines, User, Mail, Lock, EyeOff, Eye, Loader2} from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import {Link} from 'react-router-dom';
import toast from 'react-hot-toast';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const {signup, isSigningUp} = useAuthStore();

  const validateForm = () =>{
    if(!formData.fullName.trim()) return toast.error("Full name is required");
    if(!formData.email.trim()) return toast.error("Email is required");
    if(!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if(!formData.password.trim()) return toast.error("Password is required");
    if(formData.password.length < 6) return toast.error("Password must be atleast 6 characters");
    return true;
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    const success = validateForm();
    if(success===true)signup(formData);
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-b from-green-500 to-teal-500">
      
      {/* left side */}
      {/* <div className="flex flex-col justify-center items-center gap-4 p-8 sm:p-16 bg-gradient-to-b from-green-500 to-teal-500 rounded-lg shadow-lg"> */}
        <div className="w-full max-w-lg space-y-6 bg-gradient-to-br from-green-500 to-teal-500 bg-opacity-30 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
          {/* Logo*/}
          <div className='text-center mb-8'>
            <div className='flex flex-col items-center gap-2
            group'>
              <div className='size-12 rounded-xl bg-primary/10 flex
              items-center justify-center group-hover:bg-primary/20
              transition-colors'>
                <AudioLines className='size-8 text-primary text-black'/>
              </div>
                <h1 className='text-2xl text-black font-bold
                mt-2'> Create Account</h1>
                
            </div>
          </div>
          <form  onSubmit={handleSubmit}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-medium
                text-black'>FullName</span>
              </label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="size-5 text-base-content/40" />
                  </div>
                  <input 
                    type="text" 
                    className="input w-full pl-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Enter Full Name" 
                    value={formData.fullName} 
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} 
                  />
                </div>

                <label className='label'>
                <span className='label-text font-medium
                text-black'>Email</span>
              </label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="size-5 text-base-content/40" />
                  </div>
                  <input 
                    type="text" 
                    className="input w-full pl-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Enter your Email" 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                  />
                </div>

                <label className="label">
              <span className="label-text font-medium text-black">Password</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="size-5 text-base-content/40" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="input w-full pl-10 pr-12 py-3 rounded-lg focus:outline-none 
                          focus:ring-2 text-lg placeholder:text-2xl placeholder:font-bold
                          placeholder:text-gray-500 focus:ring-blue-500"
                placeholder="......"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center  "
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="size-5 text-base-content/40" />
                ) : (
                  <Eye className="size-5 text-base-content/40" />
                )}
              </button>
            </div>

            <button
                type="submit"
                className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white
                 mt-5 pl-10 pr-12 py-3 rounded-lg"
                disabled={isSigningUp}
              >
                {isSigningUp ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </div>
          </form>
          <div className='text-center'>
            <p className='etxt-base-content/60'>
            Already have an account?{" "}
            <Link to="/login" className='text-gray-300 hover:text-white'>
            Sign In
            </Link>
            </p>
          </div>
        </div>
      {/* </div> */}

      {/* right side */}
      {/* <div className="flex flex-col justify-center items-center gap-4 p-8 sm:p-16 bg-gradient-to-b from-green-500 to-teal-500 rounded-lg shadow-lg">
        <h2 className='text-4xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-500ms'>
          Plug into the world of music with Musically
        </h2>
        <p className='text-lg mb-8 animate__animated animate__fadeIn animate__delay-700ms'>
          An app tailored to help you enjoy your favorite music anytime, anywhere. Whether you're discovering new tracks or listening to old favorites, Musically has it all.
        </p>
         <p className='text-sm text-gray-300 animate__animated animate__fadeIn animate__delay-900ms'>
          Start exploring and immerse yourself in a world of music, entertainment, and more.
        </p> 
      </div> */}

    </div>
  )
}

export default Signup
