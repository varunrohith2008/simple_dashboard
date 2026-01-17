import React from 'react';

const DashboardHome = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Welcome to your Dashboard</h2>
            <p className="text-gray-600">
                This is the main area where you can view your stats and recent activities.
                Use the sidebar to navigate to different sections.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-100 p-4 rounded shadow border border-blue-200">
                    <h3 className="font-bold text-blue-800">Users</h3>
                    <p className="text-2xl text-blue-600">1,234</p>
                </div>
                <div className="bg-green-100 p-4 rounded shadow border border-green-200">
                    <h3 className="font-bold text-green-800">Sales</h3>
                    <p className="text-2xl text-green-600">₹ 8,45,345</p>
                </div>
                <div className="bg-purple-100 p-4 rounded shadow border border-purple-200">
                    <h3 className="font-bold text-purple-800">Performance</h3>
                    <p className="text-2xl text-purple-600">+15%</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
