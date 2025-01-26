import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-purple-300 border border-slate-600 rounded-md p-8 w-full max-w-md shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Sign Up</h1>
        <form action="">
          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-gray-900 mb-1 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-950 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-gray-900 mb-1 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border border-gray-950 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-gray-900 mb-1 font-semibold"
            >
              Rewrite Password
            </label>
            <input
              type="password"
              className="w-full p-2 border border-gray-950 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800"
            ></input>
          </div>
          {/* Remember me and forgot password */}
          {/* <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="checkbox"
                id=""
                className="h-4 w-4 text-black focus:ring-purple-900 border-gray-700 rounded"
              ></input>
              <label htmlFor="Remember me" className="ml-2 text-slate-900">
                Remember Me
              </label>
            </div>
            <span className="text-slate-800 hover:underline font-semibold cursor-pointer">
              Forgot Password?
            </span>
          </div> */}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 my-2"
          >
            Sign In
          </button>

          {/* Already have account? */}
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
