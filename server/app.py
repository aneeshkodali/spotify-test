# (if needed) pip install virtualenv
# create virtual environment: virtualenv env
# activate virtual environment (for Windows): source env/Scripts/activate
# make sure (env) appears => can now pip install packages
# run with python app.py


#### IMPORT
import os
from dotenv import load_dotenv
from flask import Flask, redirect
from flask_cors import CORS 
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

#### APP SETUP
app = Flask(__name__)
CORS(app)
load_dotenv()

## Spotify
cid = os.getenv('SPOTIFY_CLIENT_ID')
secret = os.getenv('SPOTIFY_SECRET_ID')
client_credentials_manager = SpotifyClientCredentials(client_id=cid, client_secret=secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)


#### ROUTES

# test route
@app.route('/', methods=['GET'])
def index():
    return "Hi"

# route to search for a term
@app.route('/search/<string:term>', methods=['GET'])
def search(term):
    search_results = sp.search(q=term, type='track', limit=20)
    return search_results

# 62zFEHfAYl5kdHYOivj4BC
# 6sbXGUn9V9ZaLwLdOfpKRE
@app.route('/audio-analysis/<string:id>', methods=['GET'])
def getAudioAnalysis(id):
    audio_analysis = sp.audio_analysis(id)
    return audio_analysis

@app.route('/audio-features/<string:id>', methods=['GET'])
def getAudioFeatures(id):
    #uri = f"spotify:track:{id}"
    audio_features = sp.audio_features(id)
    return {'data': audio_features}


if __name__ == "__main__":
    app.run(debug=True)