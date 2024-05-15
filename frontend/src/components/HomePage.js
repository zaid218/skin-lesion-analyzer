import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import PredictionResult from './PredictionResult';
function Home() {
    const [prediction, setPrediction] = useState(null);

    const handlePrediction = (data) => {
        setPrediction(data);
    };
    const resetPrediction = () => {
        setPrediction(null)
    }


    return (

        <div className=" min-h-screen bg-white flex flex-col justify-center items-center p-20 space-y-8 mx-auto max-w-5xl">

            <h1 className="text-3xl font-bold mt-0 mb-7 text-blue-500">Skin Lesion Prediction Analyzer</h1>
            <Link to='/about' className="text-green-500 font-bold py-1 px-1  mt-1 mb-4 rounded border border-green-500 hover:bg-green-100 hover:cursor-pointer">About</Link>
            <ImageUpload onPrediction={handlePrediction} onReset={resetPrediction} data={prediction} />
            {prediction && <PredictionResult data={prediction} onReset={resetPrediction} />}
        </div >
    );
}

export default Home;