import  express  from "express";
import { hello } from "./Controllers/GlobalController.js";
import router from "./Routes/index.js"



const app = express()

app.use("/youtube/api/v1",router)

app.get("/",function (req,res){
    res.send("welcome to youtube beackend server")
})

app.get("/hello",hello)
app.listen(8000,()=>console.log("app is running on server"))