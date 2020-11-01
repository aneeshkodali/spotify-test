# (if needed) pip install virtualenv
# create virtual environment: virtualenv env
# activate virtual environment (for Windows): source env/Scripts/activate
# make sure (env) appears => can now pip install packages
# run with python app.py


#### IMPORT
import os
from dotenv import load_dotenv
from flask import Flask, redirect
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

#### APP SETUP
app = Flask(__name__)
load_dotenv()

## Spotify
cid = os.getenv('SPOTIFY_CLIENT_ID')
secret = os.getenv('SPOTIFY_SECRET_ID')
#token = 'BQBdXPZug3XPbOsN5ta1kapirUGcDT_z4YcMV-Abm47PXdwU49Td86tuBSzbzUDbXIwRKlBdpYLy4tiQ07p6zr5BGjNnpKyTJZM9dQdW8UZnVX_cSdaDoVWm-l_Aq1DKuIyjt8HqNw'
client_credentials_manager = SpotifyClientCredentials(client_id=cid, client_secret=secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

#spotify_baseUrl = 'https://api.spotify.com'

#### ROUTES

#id = '4MCBfE4596Uoi2O4DtmEMz'

@app.route('/', methods=['GET'])
def index():
    return "Hi"

@app.route('/search/<string:term>', methods=['GET'])
def search(term):
    term_spotify = term.replace('_','+')

    termSearch = sp.search(q=term_spotify, type='track', limit=1)
    return termSearch['tracks']

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
    return {'response': audio_features}


if __name__ == "__main__":
    app.run(debug=True)