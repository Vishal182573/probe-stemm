import express, {Request,Response} from "express"



const app = express();
const PORT = process.env.PORT || 6000

app.use(express.json());

app.get("/",(req:Request,res:Response)=>{
    res.send("server is runnig")
})


app.listen(PORT,()=>{
    console.log(`server is running on port`,PORT)
})