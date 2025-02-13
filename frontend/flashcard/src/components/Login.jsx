import React, { useState } from "react";
import { useUserStore } from "../../stores/user"; // Import Zustand store
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { loginUser, loading } = useUserStore(); // Zustand state
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await loginUser(email, password);
    if (success) {
      navigate("/card"); // Redirect to dashboard after successful login
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer /> {/* Toast notifications */}
      <div className="bg-purple-200 border rounded-md p-8 w-full max-w-md shadow-inner">
        <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-900 mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-950 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 mb-1 font-semibold">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-950 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="mt-4 text-center">
            <span>
              New here?{" "}
              <a href="/sign-up" className="hover:underline">
                Create an account
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
