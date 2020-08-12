const express = require('express')
const app = express()
const mongo = require("mongodb")
const MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb://localhost:27017"
let db;


app.get("/", (req, res) => {
    res.send("This is the Home Page for the App !!")
})

app.get("/restaurant", (req, res) => {
    db.collection("restaurant").find().toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

MongoClient.connect(mongoUrl, (err, client) => {
    if (err) console.log("Bitch This shit is Broken!!");
    db = client.db("restaurants")
    app.listen(3000, () => {
        console.log("This Shit Is On!!")
    })

})