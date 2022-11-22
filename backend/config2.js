const mongoose = require('mongoose')



const dbconnectforaddress = async()=>{
   await mongoose.connect('mongodb://localhost:27017/ecommercewebsite')
}

dbconnectforaddress()

const addressShecma = new mongoose.Schema({
    Name:String,
    Address_line_1:String,
    Address_line_2:String,
    Mobile_Number:Number,
    Email:String
})

const addresesmodle = mongoose.model('addreses',addressShecma)

module.exports = addresesmodle