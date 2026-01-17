import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaUser } from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login logic here
        navigate('/dashboard');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-center">
                    <div className="p-4 bg-blue-500 rounded-full text-white">
                        <FaUser size={30} />
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-center text-gray-900">Login to your account</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition duration-300 hover:scale-105"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <FaSignInAlt className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
                <div className="text-center">
                    <button onClick={() => navigate('/register')} className="text-sm text-blue-600 hover:underline">
                        Don't have an account? Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
