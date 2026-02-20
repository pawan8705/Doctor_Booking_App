import React from "react";

// Generic Skeleton Block
export const Skeleton = ({ className = "" }) => (
  <div
    className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-lg bg-[length:200%_100%] ${className}`}
    style={{ backgroundSize: "200% 100%", animation: "shimmer 1.5s infinite" }}
  />
);

// Doctor Card Skeleton
export const DoctorCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
    <Skeleton className="w-full h-48 rounded-lg mb-4" />
    <Skeleton className="w-24 h-4 mb-2" />
    <Skeleton className="w-36 h-5 mb-1" />
    <Skeleton className="w-28 h-4" />
  </div>
);

// Page Loading Spinner
export const PageLoader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
    <div className="text-center">
      <div className="relative w-16 h-16 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-blue-100 dark:border-blue-900" />
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
      </div>
      <p className="text-blue-500 font-medium text-sm animate-pulse">Loading...</p>
    </div>
  </div>
);

// Inline Spinner
export const Spinner = ({ size = 20, className = "" }) => (
  <div
    className={`rounded-full border-2 border-blue-200 border-t-blue-500 animate-spin ${className}`}
    style={{ width: size, height: size }}
  />
);

// Appointment Card Skeleton
export const AppointmentSkeleton = () => (
  <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 flex flex-col sm:flex-row gap-4 items-center">
    <Skeleton className="w-20 h-20 rounded-lg flex-shrink-0" />
    <div className="flex-1 w-full">
      <Skeleton className="w-32 h-5 mb-2" />
      <Skeleton className="w-24 h-4 mb-2" />
      <Skeleton className="w-40 h-4" />
    </div>
    <div className="flex gap-2">
      <Skeleton className="w-20 h-8 rounded-lg" />
      <Skeleton className="w-16 h-8 rounded-lg" />
    </div>
  </div>
);

export default PageLoader;