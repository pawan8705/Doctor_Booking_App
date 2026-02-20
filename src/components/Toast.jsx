/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle, XCircle, AlertCircle, X } from "lucide-react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "success", duration = 3500) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* Toast Container */}
      <div
        className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none"
        aria-live="polite"
        aria-atomic="false"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`
              pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border
              backdrop-blur-sm min-w-[280px] max-w-sm
              transform transition-all duration-300 ease-out
              animate-slide-in
              ${
                toast.type === "success"
                  ? "bg-green-50 dark:bg-green-900/80 border-green-200 dark:border-green-700 text-green-800 dark:text-green-200"
                  : toast.type === "error"
                  ? "bg-red-50 dark:bg-red-900/80 border-red-200 dark:border-red-700 text-red-800 dark:text-red-200"
                  : "bg-blue-50 dark:bg-blue-900/80 border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-200"
              }
            `}
            role="alert"
          >
            {toast.type === "success" && <CheckCircle size={18} className="flex-shrink-0 text-green-500" />}
            {toast.type === "error" && <XCircle size={18} className="flex-shrink-0 text-red-500" />}
            {toast.type === "info" && <AlertCircle size={18} className="flex-shrink-0 text-blue-500" />}
            <p className="text-sm font-medium flex-1">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);

export default ToastProvider;