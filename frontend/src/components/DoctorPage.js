import React from 'react';

function DoctorPage() {
    return (
        <div className="relative min-h-screen bg-gray-100 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="https://source.unsplash.com/1600x900/?doctor"
                    alt="Doctor's Dashboard Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center py-16">
                <h1 className="text-4xl font-bold text-white mb-8">Doctor's Dashboard</h1>
                <p className="text-xl text-white">Here you can view patient information and manage your tasks.</p>
                {/* Add more details and functionalities as needed */}
            </div>
        </div>
    );
}

export default DoctorPage;
