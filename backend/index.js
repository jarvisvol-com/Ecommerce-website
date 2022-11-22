const express = require('express')
const dbconnection = require('./config.js')
const path = require('path')
const cors = require('cors')
const app = express()
const addresesmodle = require('./config2')

app.use(express.urlencoded({extended:false}))


app.use(cors({
    origin:"http://localhost:3000",
    Credential:true
}))
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/products/ecommerce',async(req,res)=>{
    const products = await dbconnection()
    const result = await products.find().limit(400).toArray()
    
    res.send(result)
    
})

app.get('/productmain',async(req,res)=>{
    const products = await dbconnection()
    const result = await products.findOne({id:parseInt(req.query.productid)})
    res.send(result)
})


app.post('/register/products/ecommerce',async(req,res)=>{
    const data = new addresesmodle(req.body)
    const result = await data.save()
    res.send(result)

})
































app.listen(5000)