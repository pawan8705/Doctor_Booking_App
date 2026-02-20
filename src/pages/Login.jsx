import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import {
  Eye, EyeOff, Mail, Lock, User,
  ArrowRight, CheckCircle, Stethoscope,
} from "lucide-react";

const FEATURES = [
  "Book appointments with 100+ specialists",
  "Instant confirmation & reminders",
  "Manage your health records",
  "Secure & HIPAA-compliant platform",
];

const getErrorMsg = (code) => {
  switch (code) {
    case "auth/email-already-in-use":  return "This email is already registered. Please sign in.";
    case "auth/wrong-password":
    case "auth/user-not-found":
    case "auth/invalid-credential":    return "Invalid email or password. Please try again.";
    case "auth/weak-password":         return "Password must be at least 6 characters.";
    case "auth/too-many-requests":     return "Too many attempts. Please try again later.";
    case "auth/invalid-email":         return "Please enter a valid email address.";
    default:                           return "Something went wrong. Please try again.";
  }
};

const Login = () => {
  const [state, setState]               = useState("login");
  const [name, setName]                 = useState("");
  const [email, setEmail]               = useState("");
  const [password, setPassword]         = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading]           = useState(false);
  const [error, setError]               = useState("");
  const { signup, login }               = useAuth();
  const navigate                        = useNavigate();

  const switchState = (s) => { setState(s); setError(""); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (state === "register" && name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }
    setLoading(true);
    try {
      state === "register"
        ? await signup(email, password)
        : await login(email, password);
      navigate("/");
    } catch (err) {
      setError(getErrorMsg(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    // ── Outer shell: stacks vertically on mobile, horizontal on lg+
    // pt-16 = navbar height compensation
    <div className="min-h-screen pt-16 flex flex-col lg:flex-row bg-gray-50 dark:bg-gray-950">

      {/* ══════════════════════════
          LEFT PANEL (lg+ only)
      ══════════════════════════ */}
      <div
        className="hidden lg:flex lg:w-[44%] xl:w-[40%] flex-shrink-0 flex-col justify-between p-10 xl:p-14 relative overflow-hidden"
        style={{ background: "linear-gradient(145deg,#0c3a7a 0%,#1558c0 45%,#2563eb 100%)" }}
      >
        {/* Blobs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-[0.15] pointer-events-none"
          style={{ background: "radial-gradient(circle,#93c5fd,transparent)" }} aria-hidden="true" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-[0.10] pointer-events-none"
          style={{ background: "radial-gradient(circle,#60a5fa,transparent)" }} aria-hidden="true" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "26px 26px" }}
          aria-hidden="true" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30">
            <Stethoscope size={22} className="text-white" aria-hidden="true" />
          </div>
          <div>
            <p className="text-white font-bold text-xl leading-tight">HealthCare</p>
            <p className="text-blue-200 text-xs">Your trusted medical partner</p>
          </div>
        </div>

        {/* Centre copy */}
        <div className="relative z-10">
          <span className="inline-block bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-blue-100 text-sm font-medium mb-5">
            🏥 Trusted by 50,000+ patients
          </span>
          <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight mb-4">
            Your Health,<br /><span className="text-blue-200">Our Mission.</span>
          </h2>
          <p className="text-blue-100 text-sm leading-relaxed mb-6 max-w-xs">
            Access world-class healthcare from the comfort of your home. Book, manage, and track your appointments effortlessly.
          </p>
          <ul className="space-y-3">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-400/20 border border-green-400/40 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={11} className="text-green-300" aria-hidden="true" />
                </div>
                <span className="text-blue-100 text-sm">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="relative z-10 grid grid-cols-3 gap-3">
          {[{ num: "100+", label: "Doctors" }, { num: "50K+", label: "Patients" }, { num: "4.9★", label: "Rating" }].map((s) => (
            <div key={s.label} className="bg-white/10 border border-white/20 rounded-2xl p-3 text-center">
              <p className="text-xl font-bold text-white">{s.num}</p>
              <p className="text-blue-200 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════
          RIGHT PANEL — always visible
          FIX: no min-h-screen here,
          flex-1 + self-stretch handles height
      ══════════════════════════ */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12 bg-gray-50 dark:bg-gray-950">
        <div className="w-full max-w-sm sm:max-w-md">

          {/* Mobile-only logo */}
          <div className="flex items-center gap-3 mb-6 lg:hidden">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Stethoscope size={20} className="text-white" aria-hidden="true" />
            </div>
            <div>
              <p className="font-bold text-gray-800 dark:text-white text-base leading-tight">HealthCare</p>
              <p className="text-gray-400 text-xs">Your trusted medical partner</p>
            </div>
          </div>

          {/* ── CARD ── */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-5 sm:p-8 w-full">

            {/* Tab toggle */}
            <div className="flex rounded-xl bg-gray-100 dark:bg-gray-800 p-1 mb-5 border border-gray-200 dark:border-gray-700">
              {["login", "register"].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => switchState(s)}
                  aria-pressed={state === s}
                  className={`flex-1 py-2 sm:py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    state === s
                      ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  }`}
                >
                  {s === "login" ? "Sign In" : "Sign Up"}
                </button>
              ))}
            </div>

            {/* Heading */}
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
              {state === "login" ? "Welcome back 👋" : "Create account ✨"}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-1 mb-5">
              {state === "login"
                ? "Sign in to manage your appointments"
                : "Join thousands of patients on HealthCare"}
            </p>

            {/* Error */}
            {error && (
              <div role="alert" className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-[10px] font-bold">!</span>
                </div>
                <p className="text-red-700 dark:text-red-400 text-xs sm:text-sm leading-snug">{error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3" noValidate>

              {/* Name (register only) */}
              {state === "register" && (
                <div className="relative">
                  <label htmlFor="auth-name" className="sr-only">Full Name</label>
                  <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" aria-hidden="true" />
                  <input
                    id="auth-name" type="text" placeholder="Full Name"
                    autoComplete="name" value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={INPUT_CLS}
                  />
                </div>
              )}

              {/* Email */}
              <div className="relative">
                <label htmlFor="auth-email" className="sr-only">Email address</label>
                <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" aria-hidden="true" />
                <input
                  id="auth-email" type="email" placeholder="Email address"
                  autoComplete="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={INPUT_CLS}
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label htmlFor="auth-password" className="sr-only">Password</label>
                <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" aria-hidden="true" />
                <input
                  id="auth-password"
                  type={showPassword ? "text" : "password"}
                  placeholder={state === "register" ? "Password (min. 6 chars)" : "Password"}
                  autoComplete={state === "login" ? "current-password" : "new-password"}
                  required value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${INPUT_CLS} pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>

              {/* Forgot */}
              {state === "login" && (
                <div className="flex justify-end">
                  <button type="button" className="text-xs text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors focus:outline-none">
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-xl shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    {state === "login" ? "Sign In" : "Create Account"}
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>

            {/* Switch */}
            <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-4">
              {state === "register" ? "Already have an account? " : "New to HealthCare? "}
              <button
                type="button"
                onClick={() => switchState(state === "register" ? "login" : "register")}
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline focus:outline-none"
              >
                {state === "register" ? "Sign In" : "Sign Up Free"}
              </button>
            </p>

            {/* Terms */}
            <p className="text-center text-[11px] text-gray-400 dark:text-gray-600 mt-3 leading-relaxed">
              By continuing you agree to our{" "}
              <Link to="/terms" className="underline hover:text-blue-500 transition-colors">Terms</Link>
              {" "}&amp;{" "}
              <Link to="/privacy" className="underline hover:text-blue-500 transition-colors">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const INPUT_CLS =
  "w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";

export default Login;
