import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <div className=" min-h-screen bg-white flex flex-col justify-center items-center p-20 space-y-8 mx-auto max-w-5xl">
            <h1 className="text-4xl font-bold mb-8 text-red-500">About Skin Tool</h1>
            <Link to="/" className="text-green-500 font-bold py-2 px-4 rounded border border-green-500 hover:bg-green-100 hover:cursor-pointer">
                Home
            </Link>

            <div className="prose max-w-none">
                <p>
                    This web app uses computer vision to identify the three highest probability diagnoses for a skin lesion. A more advanced version could be used to identify cancerous skin lesions early.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-6 text-red-500">Lesion Types</h2>
                <ul className="list-disc list-inside pl-4">
                    <li className="mb-2"><strong>nv:</strong> Melanocytic nevi...</li>
                    <li className="mb-2"><strong>mel (Cancerous):</strong> Melanoma...</li>
                    <li className="mb-2"><strong>bkl:</strong> "Benign keratosis..."</li>
                    <li className="mb-2"><strong>bcc:</strong> Basal cell carcinoma...</li>
                    <li className="mb-2"><strong>akiec:</strong> Actinic Keratoses...</li>
                    <li className="mb-2"><strong>vasc:</strong> Vascular skin lesions...</li>
                    <li className="mb-2"><strong>df:</strong> Dermatofibroma...</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-6 text-red-500">Image Format</h2>
                <p>The app accepts images in jpg or png format.</p>

                <h2 className="text-2xl font-bold mt-10 mb-6 text-red-500">Limitations</h2>
                <p>
                    The AI model (brain) that powers this app is not skilled enough to consistently assign the highest score to the correct lesion. Also, the model is not very good at detecting melanoma. That said, during testing the correct lesion was regularly among the top three predicted lesions.
                </p>
                <p>
                    The model was not trained using photos that were taken with a mobile phone. Therefore, the model's prediction accuracy could be affected by variations in the quality of mobile phone images.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-6 text-red-500">Published Design</h2>
                <p>
                    The design code and the step-by-step process used to train and test the model has been published on Kaggle. You can find the open source notebook <a href="https://www.kaggle.com" target="_blank" rel="noopener noreferrer" className='text-blue-500'>here</a>. The test results are also available in the notebook.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-6 text-red-500">Dataset License</h2>
                <p>
                    The model was trained using <a href="https://www.kaggle.com/datasets/kmader/skin-cancer-mnist-ham10000" target="_blank" rel="noopener noreferrer" className='text-blue-500'>image data</a> that was released under a CC BY-NC-SA 4.0 license. That means that this app cannot be used for commercial purposes.
                </p>

                <h2 className="text-4xl font-bold mt-20 mb-20 text-red-500 text-center">FAQ</h2>
                <section className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold mt-10 mb-6 text-red-500">Will I need to wait for the model to download every time I use the app?</h2>
                        <p className="text-base">
                            No. Once the model downloads it will be cached in memory. The next time you visit this site you won’t need to wait.
                        </p>
                        <p className="text-base">
                            That said, I suggest that you always use this tool with your web browser set to incognito mode. The model won’t be saved, but this will ensure that each time you visit this site you will always use the most up to date version of the model and not the old one that's stored in your device's memory.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mt-10 mb-6 text-red-500">What about patient data privacy?</h2>
                        <p className="text-base">
                            Your images are never sent to an external server. Any image you submit stays on your computer or mobile phone. This is because the model is running on your device. This is also why a batch of images can be analyzed in less than two seconds. The tech that makes this possible is called Tensorflow.js. It was created by Google.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mt-10 mb-6 text-red-500">What do the decimal numbers mean?</h2>
                        <p className="text-base">
                            They are probability scores between 0 and 1. They show how confident the model is that a particular condition is present on the image. For example, mel, Melanoma: 0.231 means that the model is 23% sure that the lesion shown in the image is melanoma.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mt-10 mb-6 text-red-500">How do I use this app on a computer?</h2>
                        <ul className="text-base list-disc list-inside pl-4">
                            <li>Go to this site on your computer.</li>
                            <li>Click the orange button.</li>
                            <li>Select one image or multiple images and click ‘Open’.</li>
                            <li>The app will print results for each image.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mt-10 mb-6 text-red-500">How do I use this app on a mobile phone?</h2>
                        <p className="text-base">
                            You can take a new photo or you can submit photos that are stored on your phone. The steps below apply to Android. iOS may be similar but I'm not sure.
                        </p>
                        <ol className="text-base list-decimal list-inside pl-4">
                            <li><strong>Take a photo</strong></li>
                            <ul>
                                <li>Go to this site on your phone.</li>
                                <li>Tap the orange button.</li>
                                <li>Select “Camera”</li>
                                <li>Take a photo</li>
                                <li>Tap the "tick"</li>
                                <li>The photo will be sent to the app for analysis.</li>
                            </ul>
                            <li><strong>Use images from your photo folder</strong></li>
                            <ul>
                                <li>Go to this site on your phone.</li>
                                <li>Tap the orange button.</li>
                                <li>Tap "Files"</li>
                                <li>Tap the image name</li>
                                <li>To submit a batch of images, tap each image (tick) to select it and then tap "Open".</li>
                            </ul>
                        </ol>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mt-10 mb-6 text-red-500">What would it take to make this tool more trustworthy?</h2>
                        <p className="text-base">
                            Three things are needed:
                        </p>
                        <ul className="text-base list-disc list-inside pl-4">
                            <li>Collaboration with a dermatologist/pathologist.</li>
                            <li>More high quality labeled training data.</li>
                            <li>Field testing.</li>
                        </ul>
                        <p className="text-base">
                            AI systems can be brittle. Good training scores don't guarantee that a model will perform well under real-world conditions. This tool first needs to be field tested. Then the model needs to be re-trained to make it more robust.
                        </p>
                    </div>
                </section>




            </div>
        </div>
    );
}

export default AboutPage;
