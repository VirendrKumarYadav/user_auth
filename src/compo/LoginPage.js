import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthProvider";
import {memo} from "react"

const LoginPage = () => {
  const navigate = useNavigate();
  const auth = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    
    
  const handleLogin = async(e) => {
    try {
      const response = await auth.signIn(email, password);
      console.log(response);
      // Signed in
      alert("Sucessfully Signed In.");

      // ...
      navigate("/home");
    } catch (err) {
      console.error(err);
    }

   
    e.preventDefault();
    console.log("Login clicked. Email:", email, "Password:", password);
    };
    
   



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Login
          </button>
        </form>
        <p className="text-center py-3">
          Need an Account?{" "}
          <Link
            className="text-indigo-500 text-center  underline font-serif font-bold"
            to="/Signup"
          >
            Sign Up
          </Link>{" "}
        </p>
      </div>
  
    </div>
  );
};

export default memo(LoginPage);
