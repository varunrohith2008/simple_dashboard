import React, { useState } from 'react';
import { FaBell, FaMoon, FaLock, FaGlobe } from 'react-icons/fa';

const Settings = () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [publicProfile, setPublicProfile] = useState(true);

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Settings</h2>

            <div className="space-y-8">
                {/* Notifications */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                            <FaBell size={20} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Notifications</h3>
                            <p className="text-sm text-gray-500">Receive email alerts and push notifications</p>
                        </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>

                {/* Dark Mode */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-full">
                            <FaMoon size={20} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Dark Mode</h3>
                            <p className="text-sm text-gray-500">Enable dark theme for the dashboard</p>
                        </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                </div>

                {/* Privacy */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-green-100 text-green-600 rounded-full">
                            <FaLock size={20} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Privacy</h3>
                            <p className="text-sm text-gray-500">Make your profile public</p>
                        </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={publicProfile} onChange={() => setPublicProfile(!publicProfile)} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                </div>

                {/* Language */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full">
                            <FaGlobe size={20} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Language</h3>
                            <p className="text-sm text-gray-500">Select your preferred language</p>
                        </div>
                    </div>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        <option>English (US)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Settings;
