const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const AuthRouter = require("./Routes/AuthRouther")
const ProductRouter = require("./Routes/ProductRouter")


require("dotenv").config(); 
require("./Models/db");
const  PORT = process.env.PORT || 8080;

console.log("inside mongoose connect")


app.get("/", (req, resp)=>{
    resp.send("hi this is Home Page")
})

app.use(bodyParser.json());
app.use(cors())
app.use("/auth", AuthRouter)
app.use("/products", ProductRouter)






app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`)
})