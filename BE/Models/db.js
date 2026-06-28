console.log("DB file loaded...");

const mongoose = require("mongoose")
const MONGO_Connection = process.env.MONGO_Connection


console.log("Mongo URI:", process.env.MONGO_Connection);

mongoose.connect(MONGO_Connection)
    .then( () =>{
        console.log("MongoDB Connected...")
        
    }).catch((err) =>{
        console.log("MongoDB connection error :", err)
    })

