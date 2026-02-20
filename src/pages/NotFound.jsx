import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="text-center max-w-md">
        <div className="relative mb-8">
          <p className="text-[120px] sm:text-[160px] font-black text-blue-100 dark:text-gray-800 leading-none select-none">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div>
              <p className="text-5xl mb-2">🏥</p>
            </div>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-all shadow-md hover:shadow-lg hover:scale-105"
          >
            <Home size={18} /> Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;