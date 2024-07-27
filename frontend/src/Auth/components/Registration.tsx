// Register.tsx
import React, { useState } from "react";
import { auth, provider } from "../../firebase.config";
import { signInWithPopup } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import GoogleButton from 'react-google-button';

const Register: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      // You can access user info via result.user
      toast.success("Registered successfully!");
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Error while registering");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <Toaster toastOptions={{ duration: 4000 }} />
      <div className="w-80 flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-center text-3xl font-medium mb-6">Register</h1>
        <GoogleButton
          style={{ width: '100%' }}
          type="dark"
          onClick={handleSignUp}
        />
        {loading && <p>Loading...</p>}
      </div>
    </section>
  );
};

export default Register;
