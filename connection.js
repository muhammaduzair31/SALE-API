const { Client } = require("pg");

const client = new Client({
    host:"localhost",
    user:"postgress",
    port:"5432",
    password:"1234",
    database:"postgress"
})
module.exports=client

