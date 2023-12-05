import  express  from "express";
import { hello } from "./Controllers/GlobalController.js";
import router from "./Routes/index.js"
import mongoose from "mongoose";
import dotenv from "dotenv"


const app = express()
dotenv.config()
app.use(express.json())


app.use("/youtube/api/v1",router)

app.get("/",function (req,res){
    res.send("welcome to youtube beackend server")
})

app.get("/hello",hello)

app.listen(8000,()=>console.log("app is running on server"))
mongoose.connect(process.env.MONGOURL).then(() => console.log("database connect"))