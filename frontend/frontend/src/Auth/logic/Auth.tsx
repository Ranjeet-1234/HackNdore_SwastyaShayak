import React, { useState } from "react";
import Login from '../components/Login'; // Import the Login component
import Register from '../components/Registration'; // Import the Register component

const Auth: React.FC = () => {
  // Define a state variable to toggle between Login and Register components
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    // Main container for the authentication section with flexbox for centering
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-80 p-4 bg-white rounded-lg shadow-md">
        {/* Conditional rendering based on isLogin state */}
        {isLogin ? <Login /> : <Register />}
        <div className="mt-4 text-center">
          {/* Ternary operator to toggle between Login and Register text */}
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              {/* Button to switch to the Register component */}
              <button onClick={() => setIsLogin(false)} className="text-blue-500">
                Register
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              {/* Button to switch to the Login component */}
              <button onClick={() => setIsLogin(true)} className="text-blue-500">
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Auth;
