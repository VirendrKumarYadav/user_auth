import React from 'react'
import { useAuthContext } from "./AuthProvider";
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const auth = useAuthContext();
    const naviagte=useNavigate();
    const handleSignout = async() => {
        await auth.sign_out(auth);
      naviagte("/");
        
    };

  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to My Home Page 
        </h1>
        <p className="text-lg mb-8">Where creativity meets innovation</p>
        <button onClick={handleSignout} className="bg-yellow-500 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded-full">
          Sign Out
        </button>
        <div className="mt-8">
          <p className="text-sm">Follow us on:</p>
          <div className="flex justify-center mt-2">
            <a href="#" className="text-white mx-2 hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white mx-2 hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white mx-2 hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage
