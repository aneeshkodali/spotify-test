# (if needed) pip install virtualenv
# create virtual environment: virtualenv env
# activate virtual environment (for Windows): source env/Scripts/activate
# make sure (env) appears => can now pip install packages
# run with python app.py


#### IMPORT
from flask import Flask
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

#### APP SETUP
app = Flask(__name__)

## Spotify
cid = 'e801ceda6ea445aa977c9e671d2a68cc'
secret = '3142006f1eb943a7a9fd42caf042ba97'
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

    test = sp.search(q=term_spotify, type='track', limit=1)
    return test

if __name__ == "__main__":
    app.run(debug=True)