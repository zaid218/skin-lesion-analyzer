import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import PredictionResult from './PredictionResult';

function HomePage() {
    const [prediction, setPrediction] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedPrediction = localStorage.getItem('prediction');
        if (storedPrediction) {
            setPrediction(JSON.parse(storedPrediction));
        }
    }, []);

    const handlePrediction = (data) => {
        setPrediction(data);
        localStorage.setItem('prediction', JSON.stringify(data));
    };

    const resetPrediction = () => {
        setPrediction(null);
        localStorage.removeItem('prediction');
        localStorage.removeItem('imageUrl');
        localStorage.removeItem('imageFile');
    };

    const handleLogout = () => {
        localStorage.removeItem('role');
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center p-20 space-y-8 mx-auto max-w-5xl">
            <h1 className="text-3xl font-bold mt-0 mb-7 text-blue-500">Please Upload an Image of the Skin Disease for Analysis</h1>
            <button onClick={handleLogout} className="text-red-500 font-bold py-1 px-1 mt-1 mb-4 rounded border border-red-500 hover:bg-red-100 hover:cursor-pointer">Logout</button>
            <Link to='/about' className="text-green-500 font-bold py-1 px-1 mt-1 mb-4 rounded border border-green-500 hover:bg-green-100 hover:cursor-pointer">About</Link>
            <ImageUpload onPrediction={handlePrediction} onReset={resetPrediction} data={prediction} />
            {prediction && <PredictionResult data={prediction} />}
        </div>
    );
}

export default HomePage;
