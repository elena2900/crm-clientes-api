const mongoose = require("mongoose")

const uri = "mongodb+srv://elena2900:u0KbuQOUtW55ZZGJ@curso-mongodb.ncvpw.mongodb.net/crm-clientes"

const DBConnection = async()=>{
    try{
    await mongoose.connect(uri)
    console.log("DB is connected");
    } catch (error){
        console.log(error);
        throw new Error('Failed to initialize database')
    }
};

module.exports = DBConnection;