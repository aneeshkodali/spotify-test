// IMPORTS

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const indexRoutes = require('./routes/index');

// APP CONFIG
const app = express();
app.use(express.json());
app.use(cors());
app.use('/', indexRoutes);


// SPOTIFY API SETUP
const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_SECRET_ID
});
spotifyApi.setAccessToken(process.env.SPOTIFY_TOKEN)

//app.get('/', (req, res) => {
//    //res.send("Hello World!")
//    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
//        function(data) {
//        //  console.log('Artist albums', data.body);
//        res.send(data.body)
//        },
//        function(err) {
//          console.error(err);
//        }
//      );
//});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server now running on port ${port}`)
})