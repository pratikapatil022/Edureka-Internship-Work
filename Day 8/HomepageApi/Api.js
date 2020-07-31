const express = require('express');
const app = express();
const port = 8900;
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongourl = "mongodb://localhost:27017";
var cors = require('cors')
let db;
let col_name="movies";

app.get('/',(req,res) => {
    res.status(200).send("Api is Running")
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors());


//Get 
app.get('/movies',(req,res) => {
    db.collection(col_name).find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    });
});

//Post
app.post('/addMovies',(req,res)=>{
    console.log(req.body);
    db.collection(col_name).insert(req.body,(err,result) => {
        if(err){
            throw err
        }else{
            res.send('Data Added')
        }
    });
});



MongoClient.connect(mongourl,(err,client) => {
    if(err) console.log(err);
    db = client.db('edurekainternship')
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is running on port ${port}`)
    });
})
