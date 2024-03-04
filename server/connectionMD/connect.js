const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()
const connect =async()=>{
    try {
        await mongoose.connect(process.env.MONGOURL)
        console.log("MongoDb connected")
    } catch (error) {
        console.log("error occure ", error);
    }
}
module.exports = connect;