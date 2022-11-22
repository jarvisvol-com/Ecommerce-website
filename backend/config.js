const {MongoClient} = require('mongodb')

const url = "mongodb://localhost:27017";

const client = new MongoClient(url)


const dbconnection = async()=>{
    const result = await client.connect()

    const db = result.db('ecommercewebsite')

    const col = db.collection('products')
    return col 
}

module.exports = dbconnection;