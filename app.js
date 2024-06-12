const express=require("express")
const mongoose = require("mongoose")
const cors =require("cors")
const { pharmacymodel}=require("./models/pharmacy")


const app =express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://adilafarhanavv:0987adi7890@cluster0.4nikuym.mongodb.net/pharmacydb?retryWrites=true&w=majority&appName=Cluster0")

app.get("/view",(req,res)=>{
    pharmacymodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.post("/add",(req,res)=>{
    let input =req.body
    let pharmacy = new pharmacymodel(input)
    pharmacy.save()
    console.log(pharmacy)
    res.send({"status":"success"})
})
app.post("/search",(req,res)=>{
    let input= req.body
    pharmacymodel.find(input).then(
    (data) =>{
        res.json(data)
    }
    ).catch(
        (error)=>{
    
        res.json(error)
    }
    )

}
)



app.listen(8080,()=>{
    console.log("server started")
})