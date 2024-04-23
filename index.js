const express=require("express")
const MoviesRouter = require("./src/Routes")
const ConnectDB = require("./db")


const app=express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("This is our home Route")
})

app.use('/movies',MoviesRouter)
 let PORT=8080
app.listen(8080,()=>{
    try {
        ConnectDB()
        console.log("DB is connected Succesfully");
        console.log("server is started");
    } catch (error) {
        
    }
   
})