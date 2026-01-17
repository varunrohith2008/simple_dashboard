import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    }

    const activeStyle = {
        backgroundColor: '#374151', // gray-700
        color: '#ffffff',
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="p-4 text-center text-xl font-bold border-b border-gray-700">
                    ROCKY
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <NavLink
                        to="/dashboard"
                        end
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        className="flex items-center space-x-3 p-3 rounded hover:bg-gray-700 transition"
                    >
                        <FaHome />
                        <span>Home</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/profile"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        className="flex items-center space-x-3 p-3 rounded hover:bg-gray-700 transition"
                    >
                        <FaUser />
                        <span>Profile</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/settings"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        className="flex items-center space-x-3 p-3 rounded hover:bg-gray-700 transition"
                    >
                        <FaCog />
                        <span>Settings</span>
                    </NavLink>
                </nav>
                <div className="p-4 border-t border-gray-700">
                    <button onClick={handleLogout} className="flex items-center space-x-3 p-3 w-full rounded hover:bg-red-600 transition text-gray-300 hover:text-white">
                        <FaSignOutAlt />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <header className="bg-white shadow p-4">
                    <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
                </header>
                <div className="p-8">
                    {/* The Outlet will render the child routes (e.g., DashboardHome) */}
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
