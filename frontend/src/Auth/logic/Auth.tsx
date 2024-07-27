import React, { useState } from "react";
import { auth, provider } from "../../firebase.config";
import { signInWithPopup } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import GoogleButton from 'react-google-button';

const Auth: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      // You can access user info via result.user
      toast.success("Logged in successfully!");
      setUser(true);
    } catch (error) {
      console.error("Error during sign-in:", error);
      toast.error("Error while logging in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <Toaster toastOptions={{ duration: 4000 }} />
      {user ? (
        <h2 className="text-center text-2xl font-medium">Login Successful</h2>
      ) : (
        <div className="w-80 flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-center text-3xl font-medium mb-6">Welcome</h1>
          <GoogleButton
            style={{ width: '100%' }}
            type="dark"
            onClick={handleSignIn}
          />
          {loading && <p>Loading...</p>}
        </div>
      )}
    </section>
  );
};

export default Auth;
