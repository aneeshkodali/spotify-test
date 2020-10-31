const app = require('express')();



app.get('/', (req, res) => {
    res.send("Hello World!")
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server now running on port ${port}`)
})