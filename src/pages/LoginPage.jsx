import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Login</h1>
                <h2 className="text-lg text-center text-gray-600 mb-6">Enter your credentials to continue</h2>

                <div className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Login
                        </button>
                    </div>

                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-500">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-blue-500 hover:underline">
                                Register here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
