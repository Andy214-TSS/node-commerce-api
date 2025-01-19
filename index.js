const express = require('express')
const sqlite3 = require('sqlite3').verbose()

const app = express();
const database_name = process?.env?.DATABASE_NAME || 'database.db';

const db = new sqlite3.Database(`./${database_name}`, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(('Connected to the database.'))
    }
});

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("OK");
});

app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

app.get("/api/products", (req, res) => {
    db?.all('SELECT * FROM products', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Fail to get Products');
        } else {
            res.status(200).send(rows);
        }
    });
});

module.exports = app;