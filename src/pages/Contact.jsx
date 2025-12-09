import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="w-full max-w-7xl mt-[18px] px-4">
      {/* Header */}
      <header className="text-center my-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Contact <span className="text-blue-500">Us</span>
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          We're happy to help — reach out for appointments, partnerships or support.
        </p>
      </header>

      {/* Main two-column area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
        {/* Left: image / card */}
        <div className="flex justify-center">
          <div className="w-full  rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800">
            <img
              src={assets.contact_image}
              alt="Contact"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Visit Our Office
              </h3>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                00000 Willms Station<br />
                Suite 000, Washington, USA
              </p>

              <div className="mt-4 text-sm text-gray-700 dark:text-gray-200">
                <p>📞 (000) 000-0000</p>
                <p className="mt-1">✉️ pradeepkuma138@gmail.com</p>
              </div>

              <div className="mt-6">
                <a
                  href="#jobs"
                  className="inline-block px-5 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm bg-blue-500 hover:bg-blue-600 text-white transition hover:text-white"
                >
                  Explore Jobs
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: contact details + simple contact form */}
        <div className="w-full">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Get in touch
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Use the form below and we'll get back to you within 1 business day.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you — form submitted (demo).");
                e.currentTarget.reset();
              }}
              className="grid grid-cols-1 gap-4"
            >
              <label className="text-sm">
                <span className="block text-gray-700 dark:text-gray-200 mb-1">Full name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </label>

              <label className="text-sm">
                <span className="block text-gray-700 dark:text-gray-200 mb-1">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </label>

              <label className="text-sm">
                <span className="block text-gray-700 dark:text-gray-200 mb-1">Message</span>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </label>

              <div className="flex items-center justify-between mt-2">
                <button
                  type="submit"
                  className="px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
        For urgent medical help, please contact your local emergency services. This site is for appointment booking and information only.
      </div>
    </div>
  );
};

export default Contact;
