const {Schema,model}=require("mongoose")

const MovieSchema=new Schema({
    user:{type:String,required:true},
    product:{type:String},
},{versionKey:false})

const MovieModel=new model('MovieSchema',MovieSchema)

module.exports=MovieModel