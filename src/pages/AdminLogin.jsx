import React from "react";

const AdminLogin = () => {
    const [state, setState] = React.useState("Admin");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <div className="flex justify-center items-center mt-10 px-4">
            <form className="
                flex flex-col gap-4 w-full max-w-[380px]
                p-8 rounded-lg border bg-white dark:bg-gray-800
                border-gray-200 dark:border-gray-700
                text-gray-600 dark:text-gray-300
                shadow-sm
            ">
                {/* Heading */}
                <p className="text-2xl font-semibold mb-2 text-center">
                    {state === "Admin" ? "Admin" : "Doctor"} 
                    <span className="text-indigo-500"> Login</span>
                </p>

                {/* Email */}
                <div className="w-full">
                    <p className="mb-1">Email</p>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="type here"
                        className="
                            border border-gray-300 dark:border-gray-600
                            bg-white dark:bg-gray-700 
                            text-gray-700 dark:text-gray-200
                            rounded w-full p-2 mt-1 
                            focus:outline-none focus:border-indigo-500
                        "
                        type="email"
                        required
                    />
                </div>

                {/* Password */}
                <div className="w-full">
                    <p className="mb-1">Password</p>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="type here"
                        className="
                            border border-gray-300 dark:border-gray-600
                            bg-white dark:bg-gray-700 
                            text-gray-700 dark:text-gray-200
                            rounded w-full p-2 mt-1 
                            focus:outline-none focus:border-indigo-500
                        "
                        type="password"
                        required
                    />
                </div>

                {/* Toggle */}
                {state === "register" ? (
                    <p className="text-sm">
                        Already have an account?
                        <span
                            onClick={() => setState("Admin")}
                            className="text-indigo-500 cursor-pointer ml-1"
                        >
                            Admin
                        </span>
                    </p>
                ) : (
                    <p className="text-sm">
                        Create an account?
                        <span
                            onClick={() => setState("register")}
                            className="text-indigo-500 cursor-pointer ml-1"
                        >
                            Doctor
                        </span>
                    </p>
                )}

                {/* Button */}
                <button
                    className="
                        bg-indigo-500 hover:bg-indigo-600 
                        transition-all text-white w-full py-2 
                        rounded-md cursor-pointer
                    "
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;
