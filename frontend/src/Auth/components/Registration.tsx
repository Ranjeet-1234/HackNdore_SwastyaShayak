import React, { useState } from "react";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [designation, setDesignation] = useState<string>('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', { email, password, designation });
    // Add registration logic here based on the designation
  };

  return (
    <form onSubmit={handleRegister} className="max-w-5xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Register</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-400 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-400 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-700">Designation</label>
        <select
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          className="p-2 border border-gray-400 rounded w-full"
          required
        >
          <option value="" disabled>Select designation</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="guest">Guest</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Register
      </button>
    </form>
  );
};

export default Register;
