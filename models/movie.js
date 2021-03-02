const mongoose =require("mongoose")
const movieSchema= new mongoose.Schema({
     md:{
        type:String,
        required:true
    },
    mt:
    {
        type:String,
        required:true
    },
    mdt:
    {
        type:Date,
        required: true,
        default:Date.now
    }
    
});
module.exports =mongoose.model('Movie',movieSchema)