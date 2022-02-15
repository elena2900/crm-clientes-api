const mongoose = require("mongoose")

const config = require("../config")

//const uri = "mongodb+srv://elena2900:RwQqtlL8JAirbAS3@curso-mongodb.ncvpw.mongodb.net/crm-clientes"

const DBConnection = async()=>{
    try{
    await mongoose.connect(config.mongoUri)
    console.log("DB is connected");
    } catch (error){
        console.log(error);
        throw new Error('Failed to initialize database')
    }
};

module.exports = DBConnection;