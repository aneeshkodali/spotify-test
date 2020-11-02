const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {

    try {
        const response = await spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE');
        console.log(response)
    } catch(err) {
        console.log(err)
    }
        
    

    //res.send("Hello World!")
    //spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
    //    function(data) {
    //    //  console.log('Artist albums', data.body);
    //    res.send(data.body)
    //    },
    //    function(err) {
    //      console.error(err);
    //    }
    //  );
});

module.exports = router;