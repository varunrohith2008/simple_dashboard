import React from 'react';
import { FaUserCircle, FaMapMarkerAlt, FaEnvelope, FaBriefcase } from 'react-icons/fa';

const Profile = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">User Profile</h2>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar Section */}
                <div className="flex flex-col items-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mb-4">
                        <FaUserCircle size={100} />
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Edit Avatar
                    </button>
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">Varun Rohith</h3>
                        <p className="text-gray-500">Working Professional</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center text-gray-600">
                            <FaEnvelope className="mr-2" />
                            <span>rohithvarun559@gmail.com</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <FaMapMarkerAlt className="mr-2" />
                            <span>Chennai, India</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <FaBriefcase className="mr-2" />
                            <span>ZOHO Pvt Ltd</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h4 className="font-semibold text-gray-800 mb-2">About Me</h4>
                        <p className="text-gray-600 leading-relaxed">
                            Passionate developer with over 5 years of experience in building scalable web applications.
                            Loves coding, coffee, and exploring new technologies.
                        </p>
                    </div>
                </div>
            </div>

            {/* Recent Activity / Integration Section */}
            <div className="mt-10">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                    <div className="flex items-start p-4 bg-gray-50 rounded">
                        <div className="w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></div>
                        <div>
                            <p className="text-sm font-medium text-gray-800">Completed Project Alpha</p>
                            <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded">
                        <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3"></div>
                        <div>
                            <p className="text-sm font-medium text-gray-800">Updated profile picture</p>
                            <p className="text-xs text-gray-500">1 day ago</p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded">
                        <div className="w-2 h-2 mt-2 bg-yellow-500 rounded-full mr-3"></div>
                        <div>
                            <p className="text-sm font-medium text-gray-800">Changed password</p>
                            <p className="text-xs text-gray-500">3 days ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
