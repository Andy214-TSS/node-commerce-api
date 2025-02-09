const express = require('express')
const { PrismaClient } = require('@prisma/client')

const app = express();
const db = new PrismaClient();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("OK");
});

app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

app.get("/api/products", (req, res) => {
    db.product.findMany().then((products) => {
        res.status(200).send(products);
    }).catch((error) => {
        console.error(error.message);
        res.status(500).send('Fail to get Products');
    })
});

module.exports = app;