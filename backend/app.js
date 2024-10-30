require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const morgan= require('morgan');

// middleware
app.use(bodyParser.json());
app.use(morgan('tiny'))

const api =process.env.API_URL

app.listen(process.env.PORT,()=>{
    console.log("listening on ", process.env.PORT);
    console.log(api)
    
})

app.get(`${api}/products`,(req,res)=>{
    const products={
        name:'alu',
        kg:30,
        price:40
    }
    res.send(products)
})
app.post(`${api}/products`,(req,res)=>{
   const newProduct=req.body;
   console.log(newProduct)
    res.send(newProduct)
})