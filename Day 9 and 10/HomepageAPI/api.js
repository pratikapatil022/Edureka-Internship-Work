const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongourl = "mongodb://localhost:27017";
var cors = require('cors')
let db;
let col_name = "movies";

app.get('/', (req, res) => {
    res.send("Bitch Iam Alive ")
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());


var token = "8586ruvbn4yv78"
//Get 
app.get('/movies', (req, res) => {
    db.collection(col_name).find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    });
});

//Post
app.post('/addMovies', (req, res) => {
    console.log(req.body);
    db.collection(col_name).insert(req.body, (err, result) => {
        if (err) {
            throw err
        } else {
            res.send('Data Added')
        }
    });
});

//Update Put
app.put('/updateMovie', (req, res) => {
    db.collection(col_name).update(
        { _id: req.body._id },
        {
            $set: {
                name: req.body.name,
                language: req.body.language,
                rate: req.body.rate,
                type: req.body.type,
                imageUrl: req.body.imageUrl
            }
        }, (err, result) => {
            if (err) {
                throw err
            } else {
                res.send('Data Updated')
            }
        }
    )
});


//Delete
app.delete('/deleteMovie', (req, res) => {
    db.collection(col_name).remove({ _id: req.body._id }, (err, result) => {
        if (err) {
            throw err
        } else {
            res.send('Data Deleted')
        }
    })
})

MongoClient.connect(mongourl, (err, client) => {
    if (err) console.log(err);
    db = client.db('Restaurant')
    app.listen(3000, (err) => {
        if (err) throw err;
        console.log(`Listen Bigman the server is On!!`)
    });
})
