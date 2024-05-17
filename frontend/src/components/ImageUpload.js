import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageUpload({ onPrediction, data, onReset }) {
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const visible = !file || data;

    useEffect(() => {
        const storedImageUrl = localStorage.getItem('imageUrl');
        const storedFile = localStorage.getItem('imageFile');
        if (storedImageUrl) {
            setImageUrl(storedImageUrl);
        }
        if (storedFile) {
            setFile(JSON.parse(storedFile));
        }
    }, []);

    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
        onReset();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result;
            setImageUrl(result);
            localStorage.setItem('imageUrl', result);
        };
        reader.readAsDataURL(selectedFile);

        localStorage.setItem('imageFile', JSON.stringify(selectedFile));
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
            localStorage.setItem('prediction', JSON.stringify(response.data));
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center mb-8">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col justify-center items-center mb-4">
                <input type="file" id="fileInput" onChange={handleFileChange} className="hidden" />
                {imageUrl && <img src={imageUrl} alt="Uploaded" className="mb-4 max-w-[300px] h-auto rounded-lg shadow-lg" />}
                {visible && <button type="button" onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Choose File</button>}
                {!visible && <button type="submit" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload</button>}
            </form>
        </div>
    );
}

export default ImageUpload;
