const express = require('express');
const app = express();
const port = 8900;

app.get('/', (req, res) => {
    res.status(200).send("This is home page")
});

app.get('/about', (req, res) => {
    res.send('This is about page')
})

//tells which server to listen to 
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${port}`)
});