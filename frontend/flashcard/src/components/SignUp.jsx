import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/user"; // Import Zustand store
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const { registerUser, loading } = useUserStore(); // Zustand state & API call
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const success = await registerUser(email, password);
    if (success) {
      navigate("/"); // Redirect to login page after successful registration
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer /> {/* Toast Notifications */}
      <div className="bg-purple-300 border border-slate-600 rounded-md p-8 w-full max-w-md shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Sign Up</h1>
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
          <div className="mb-4">
            <label className="block text-gray-900 mb-1 font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-950 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center my-2"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <div className="mt-4 text-center">
            <span>
              Already have an account?{" "}
              <Link to="/" className="hover:underline">
                Log in to your account.
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
