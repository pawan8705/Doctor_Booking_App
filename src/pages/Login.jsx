import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (state === "register") {
        await signup(email, password);
        alert("Account created successfully!");
      } else {
        await login(email, password);
        alert("Login successful!");
      }
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md p-8 sm:p-10 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 transition-all">
        <h2 className="text-3xl font-semibold text-center mb-4"><span className="text-indigo-500">User</span> {state === "login" ? "Login" : "Sign Up"}</h2>

        {state === "register" && (
          <div className="flex flex-col">
            <label className="mb-1">Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter your name" className="border rounded-lg p-2 dark:bg-gray-700" />
          </div>
        )}

        <div className="flex flex-col">
          <label className="mb-1">Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your email" className="border rounded-lg p-2 dark:bg-gray-700" required />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your password" className="border rounded-lg p-2 dark:bg-gray-700" required />
        </div>

        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
          {state === "register" ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={() => setState(state === "register" ? "login" : "register")} className="text-indigo-500 cursor-pointer hover:underline">{state === "register" ? "Login here" : "Sign up here"}</span>
        </p>

        <button type="submit" className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg font-medium">{state === "register" ? "Create Account" : "Login"}</button>
      </form>
    </div>
  );
};

export default Login;