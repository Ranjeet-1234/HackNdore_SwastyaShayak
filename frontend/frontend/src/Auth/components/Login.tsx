import React, { useState } from "react";

const Login: React.FC = () => {
  // Define state variables for email, password, and designation
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [designation, setDesignation] = useState<string>('');

  // Handle form submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Login:', { email, password, designation }); // Log the form data to the console
    // Add login logic here based on the designation
  };

  return (
    <form onSubmit={handleLogin} className="max-w-5xl mx-auto mt-20 ">
      <h2 className="text-lg font-semibold mb-4 text-center">Login</h2>
      
      {/* Email input field */}
      <div className="mb-4 flex justify-center">
        <div className="w-1/3">  
          <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-400 rounded w-full"
            required
          />
        </div>
      </div>
      
      {/* Password input field */}
      <div className="mb-4 flex justify-center">
        <div className="w-1/3">  
          <label className="block text-sm font-medium mb-1 text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-400 rounded w-full"
            required
          />
        </div>
      </div>
      
      {/* Designation dropdown */}
      <div className="mb-4 flex justify-center">
        <div className="w-1/3">  {/* Adjust the width as needed */}
          <label
            htmlFor="designation"
            className="block text-sm font-medium mb-1 text-gray-700"
          >
            Role
          </label>
          <select
            id="designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="p-2 border border-gray-400 rounded w-full"
            required
            aria-label="Select designation"
          >
            <option value="" disabled>Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
        </div>
      </div>
      
      {/* Submit button */}
      <div className="md-4 flex justify-center">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-1/3">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
