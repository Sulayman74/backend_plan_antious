require('dotenv').config()
const pool = require('./data-base')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT_LISTEN
// ** middleware
app.use(cors());
app.use(express.json()); // ? req.body
app.connect(pool);

// ! routes

const router = require('./routes/main-router')
app.use('/api', router)

app.listen(PORT || null, () => {
    console.log('le serveur est lancé sur le port' + ' ' + PORT)
})