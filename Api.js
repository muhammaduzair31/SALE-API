const client = require('./connection.js')
const express = require('express');
const app = express();



const port=3000;
app.listen(port,()=>console.log(`app is listening on ${port}`));
client.connect();

app.get('/sales',(req,res)=>{
    client.query(`SELECT * from sales`,(err,result)=>{
        if(!err){
            res.send(result.rows)
        }
    })
    client.end;
})
