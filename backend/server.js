const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");

const app = express();

// Load Transaction model
const Transaction = require("../backend/models/Transaction");

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Routes
app.use("/users", users);

app.get('/transactions', (req, res) => {
    Transaction.find({ user: req.query.user })
        .then((data) => {
            res.send(data)
        })
})

app.post('/transactions', (req, res) => {
    Transaction.create(req.body)
        .then((data) => {
            res.send(data)
        })
})

app.put('/transactions/:id', (req, res) => {
    let ObjectId = mongoose.Types.ObjectId;

    Transaction.findOneAndUpdate({ _id: ObjectId(req.params.id) }, req.body)
        .then((data) => {
            res.json(data)
        })
})

app.delete('/transactions/:id', (req, res) => {
    let ObjectId = mongoose.Types.ObjectId;

    Transaction.findOneAndRemove({ _id: ObjectId(req.params.id) })
        .then((data) => {
            res.json(data)
        })
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));