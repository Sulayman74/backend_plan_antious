const { Pool } = require("pg")

const pool = new Pool({
    user: process.env.USER_BDD,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT_BDD,
    database: process.env.DATABASE
})

module.exports = pool;