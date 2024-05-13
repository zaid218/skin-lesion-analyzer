import React from 'react';

function PredictionResult({ data }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold mb-4">Prediction Result</h2>
            <div className="bg-gray-200 p-4 rounded w-full max-w-lg">
                <ul className=" list-none">
                    {Object.entries(data).map(([className, probability]) => (
                        <li key={className} className="mb-2">{className}: {probability}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PredictionResult;
