const express = require('express');
const app = express();
const mongo = require('./node_modules/mongodb');
const MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb://localhost:27017"
var cors = require('./node_modules/cors');
let db;
app.use(cors());


app.get("/", (req, res) => {
    res.send("This Api Is Ready")
})

app.get('/restauranthome', (req, res) => {
    var query = {}
    if (req.query.city && req.query.mealtype) {
        query = { city: req.query.city, "type.mealtype": req.query.mealtype }
    }
    else if (req.query.city) {
        query = { city: req.query.city }
    } else if (req.query.mealtype) {
        query = { "type.mealtype": req.query.mealtype }
    }

    db.collection('restaurant').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.get('/restaurantdetails/:id', (req, res) => {
    var query = { _id: req.params.id }
    db.collection('restaurant').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.get('/restaurantlist/:city/:mealtype', (req, res) => {
    var query = {}
    var sort = { cost: 1 }
    if (req.query.cuisine && req.query.lcost && req.query.hcost && req.query.sort) {
        query = { city: req.params.city, "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine, cost: { $gt: parseInt(req.query.hcost), $lt: parseInt(req.query.lcost) } }
        sort = { cost: parseInt(req.query.sort) }
    }
    else if (req.query.cuisine && req.query.lcost && req.query.hcost) {
        query = { city: req.params.city, "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine, cost: { $gt: parseInt(req.query.hcost), $lt: parseInt(req.query.lcost) } }
    }
    else if (req.query.cuisine && req.query.sort) {
        query = { city: req.params.city, "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine }
        sort = { cost: parseInt(req.query.sort) }
    }
    else if (req.query.lcost && req.query.hcost && req.query.sort) {
        query = { city: req.params.city, "type.mealtype": req.params.mealtype, cost: { $gt: parseInt(req.query.hcost), $lt: parseInt(req.query.lcost) } }
        sort = { cost: parseInt(req.query.sort) }
    }
    else if (req.query.cuisine) {
        query = { city: req.params.city, "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine }
    } else if (req.query.lcost && req.query.hcost) {
        query = { city: req.params.city, "type.mealtype": req.params.mealtype, cost: { $gt: parseInt(req.query.hcost), $lt: parseInt(req.query.lcost) } }
    } else if (req.query.sort) {
        query = { city: req.params.city, "type.mealtype": req.params.mealtype }
        sort = { cost: parseInt(req.query.sort) }
    } else {
        query = { city: req.params.city, "type.mealtype": req.params.mealtype }
        sort = { cost: 1 }
    }
    db.collection('restaurant').find(query).sort(sort).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})




app.get('/location', (req, res) => {
    db.collection('city').find({}).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})



app.get('/cuisine', (req, res) => {
    db.collection('cuisine').find({}).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})


app.get('/mealtype', (req, res) => {
    db.collection('mealtype').find({}).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})



MongoClient.connect(mongoUrl, (err, client) => {
    if (err) console.log("Error My Man Init!!!")
    db = client.db('restaurants');
    app.listen(4000, (err) => {
        if (err) throw err;
        console.log(`Server is running`)
    })
})
