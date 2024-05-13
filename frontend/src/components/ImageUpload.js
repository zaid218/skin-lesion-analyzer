
import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload({ onPrediction }) {
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleButtonClick = () => {
        // Trigger file input click
        document.getElementById('fileInput').click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        // Read the file content and convert it to a data URL
        const reader = new FileReader();
        reader.onload = () => {
            setImageUrl(reader.result);
        };
        reader.readAsDataURL(selectedFile);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            onPrediction(response.data);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center mb-8">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col justify-center items-center mb-4">
                <input type="file" id="fileInput" onChange={handleFileChange} className="hidden" />
                {imageUrl && <img src={imageUrl} alt="Uploaded" className="mb-4 max-w-[300px] h-auto rounded-lg shadow-lg" />}
                {!file && <button type="button" onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Choose File</button>}
                {file && <button type="submit" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload</button>}
            </form>
        </div>
    );
}

export default ImageUpload;
