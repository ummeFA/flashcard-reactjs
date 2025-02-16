import { create } from "zustand";
import axios from "axios";

import { toast } from "react-toastify";

const API_URL = "http://127.0.0.1:8000"; // Update this if needed

export const useUserStore = create((set) => ({
  user: null, // Stores logged-in user info
  loading: false,
  token: localStorage.getItem("token") || null,

  // Register API
  registerUser: async (email, password) => {
    set({ loading: true });
    try {
      const response = await axios.post(`${API_URL}/register`, {
        email,
        password,
      });

      toast.success(response.data.message); // Show success message
      return true; // Indicate successful registration
    } catch (error) {
      toast.error(error.response?.data?.detail || "Registration failed.");
      return false; // Indicate failure
    } finally {
      set({ loading: false });
    }
  },

  // Login API
  loginUser: async (email, password) => {
    set({ loading: true });
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      const { access_token, user_id } = response.data;
      localStorage.setItem("token", access_token); // Store token

      set({ user: { email, user_id }, token: access_token });
      toast.success("Login successful!");
      return true;
    } catch (error) {
      toast.error(error.response?.data?.detail || "Login failed.");
      return false;
    } finally {
      set({ loading: false });
    }
  },

  // Logout
  logoutUser: () => {
    localStorage.removeItem("token"); // Remove token from storage
    set({ user: null, token: null });
    toast.info("Logged out successfully!");
  },
}));
