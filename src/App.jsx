<<<<<<< HEAD
import React, { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../src/components/Navabar";
import Footer from "./components/Footer";
import { ToastProvider } from "./components/Toast";
import { PageLoader } from "./components/LoadingSkeletons";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const AllDoctors = lazy(() => import("./pages/AllDoctors"));
const DoctorProfile = lazy(() => import("./pages/DoctorProfile"));
const SpecialityDoctors = lazy(() => import("./pages/SpecialityDoctors"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const MyAppointments = lazy(() => import("./pages/MyAppointments"));
const AdminPanel = lazy(() => import("./pages/AdminPanel"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const location  = useLocation();
  const hideLayout = location.pathname === "/admin-login";

  return (
    <ToastProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {!hideLayout && <Navbar />}

        <main className="flex-grow" id="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/alldoctors" element={<AllDoctors />} />
              <Route path="/doctorprofile/:id" element={<DoctorProfile />} />
              <Route path="/doctors/speciality/:speciality" element={<SpecialityDoctors />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Admin login is PUBLIC */}
              <Route path="/admin-login" element={<AdminLogin />} />

              {/* Protected — logged-in users only */}
              <Route path="/my-appointments" element={
                <ProtectedRoute><MyAppointments /></ProtectedRoute>
              } />

              {/* Admin panel — admin email only */}
              <Route path="/admin-panel" element={
                <AdminRoute><AdminPanel /></AdminRoute>
              } />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {!hideLayout && <Footer />}
      </div>
    </ToastProvider>
=======
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navabr";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllDoctors from "./pages/AllDoctors";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import DoctorProfile from "./pages/DoctorProfile";
import SpecialityDoctors from "./pages/SpecialityDoctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProtectedRoute from "./ProtectedRoute";
import AdminPanel from "./pages/AdminPanel";

const App = () => {
  const location = useLocation();

  // Do NOT show Navbar + Footer on admin-login page only
  const hideLayout = location.pathname === "/admin-login";

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-all">

      {/* Navbar */}
      {!hideLayout && <Navbar />}

      {/* Divider */}
      {!hideLayout && (
        <hr className="border-t border-gray-300 dark:border-gray-700 my-4 sm:mx-[10%]" />
      )}

      {/* MAIN CONTENT */}
      <main className="flex-grow sm:mx-[10%] transition-all">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          {/* Admin route (protected) */}
          <Route
            path="/admin-login"
            element={
              <ProtectedRoute>
                <AdminLogin />
              </ProtectedRoute>
            }
          />

          <Route path="/alldoctors" element={<AllDoctors />} />
          <Route path="/doctorprofile/:id" element={<DoctorProfile />} />

          <Route
            path="/doctors/speciality/:speciality"
            element={<SpecialityDoctors />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-panel"
          element={
      <ProtectedRoute>
        <AdminPanel />
      </ProtectedRoute>
    }
  />
        </Routes>
      </main>

      {/* Footer */}
      {!hideLayout && <Footer />}
    </div>
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
  );
};

export default App;

<<<<<<< HEAD

=======
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
