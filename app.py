from __future__ import division, print_function
import sys
import os
import glob
import re
import numpy as np
from PIL import Image as pil_image       # for operations on images
import keras
import tensorflow
from keras.applications.imagenet_utils import preprocess_input, decode_predictions
from keras.models import Model, load_model
from keras.preprocessing import image
from flask import Flask, redirect, url_for, request, render_template,jsonify
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
Model = load_model('model.h5')

lesion_classes_dict ={
    0: 'akiec, Actinic Keratoses (Solar Keratoses) or intraepithelial Carcinoma (Bowen’s disease)',
    1: 'bcc, Basal Cell Carcinoma',
    2: 'bkl, Benign Keratosis',
    3: 'df, Dermatofibroma',
    4: 'mel, Melanoma',
    5: 'nv, Melanocytic Nevi',
    6: 'vasc, Vascular skin lesion'
}

def model_predict(img_path, Model):
    img = image.load_img(img_path, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = tensorflow.keras.applications.mobilenet_v2.preprocess_input(x)

    preds = Model.predict(x)
    return preds

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def upload():
    if request.method == 'POST':
        f = request.files['file']
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(basepath, 'uploads', secure_filename(f.filename))
        f.save(file_path)
        print("file_path")  # Correct indentation here

        preds = model_predict(file_path, Model)
        
        # Get the top two predictions and their probabilities
        top_indices = np.argsort(preds)[0][-2:][::-1]
        top_classes = [lesion_classes_dict[i] for i in top_indices]
        top_probabilities = preds[0][top_indices]

        # Prepare the result dictionary
        result = {}
        for label, prob in zip(top_classes, top_probabilities):
            result[label] = float(prob)
        
        return jsonify(result)
    return None

if __name__ == '__main__':
    app.run(debug=True)

