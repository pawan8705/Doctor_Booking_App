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
  );
};

export default App;


