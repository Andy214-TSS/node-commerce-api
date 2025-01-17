const express = require('express')
const sqlite3 = require('sqlite3').verbose()

const app = express();

const db = new sqlite3.Database("./database.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(('Connected to the database.'))
    }
})

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("OK");
});

app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

module.exports = app