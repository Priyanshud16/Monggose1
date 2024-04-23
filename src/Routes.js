const express=require("express")
const MovieModel = require("./Schema")

const MoviesRouter=express.Router()

MoviesRouter.get('/',async(req,res)=>{
    try {
        const movies=await MovieModel.find()
        res.send(movies)
    } catch (error) {
        console.log(error)
    }
})



MoviesRouter.post('/',async(req,res)=>{
    const {user,product}=req.body
    try {
        const existingUser =await MovieModel.findOne({user})

        if(existingUser){
            return res.status(400).send("User is already registered")

        }
        const movies=new MovieModel({user,product});
        await movies.save()
        res.status(201).send("user created Successfully")
    } catch (error) {
        
    }
})

MoviesRouter.patch('/:id',async(req,res)=>{
    const {user,product}=req.body
    try {
        await MovieModel.findByIdAndUpdate(req.params.id,{user,product})
        res.status(201).send("data is updated Successfully")
    } catch (error) {
        res.status(500).send("Error updating movie")
    }
})

MoviesRouter.delete('/:id',async(req,res)=>{
    const {user}=req.body;
    try {
        await MovieModel.findByIdAndDelete(req.params.id,{user})
        res.status(201).send("User Deleted Successfully")
    } catch (error) {
        
    }
})
module.exports=MoviesRouter