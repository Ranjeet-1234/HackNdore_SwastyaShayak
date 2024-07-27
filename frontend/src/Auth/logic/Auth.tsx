import React, { useState } from "react";
import Login from '../components/Login'
import Register from '../components/Registration';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-80 p-4 bg-white rounded-lg shadow-md">
        {isLogin ? <Login /> : <Register />}
        <div className="mt-4 text-center">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button onClick={() => setIsLogin(false)} className="text-blue-500">
                Register
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
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
