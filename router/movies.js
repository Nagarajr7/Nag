const express=require('express')
const router=express.Router()
const Movie =require("../models/movie.js")
router.get("/",(req,res) => {
    res.send("hello");
})
router.post('/',async (req,res) =>
{
    const movie=new Movie({
        md:req.body.md,
        mt:req.body.mt
    })
    try{
        const newMovie =await movie.save()
        res.status(201).json(newMovie)

    }
    catch(err)
    {
        res.status(404).json("err.message")
    }
})
router.delete('/:id',getMovie,(req,res) =>
{
    try{
        res.movie.remove()
        res.json({message:"bfjhafb"})
    }
    catch(err)
    {
        res.json("kab")
    }
})
router.get('/:id',getMovie,(req,res) =>
{
  /*  try{
        const newMovie =await Movie.find()
        res.status(200).json(newMovie)

    }
    catch(err)
    {
        res.status(500).json("err.message")
    }*/
    res.json(res.movie)
})
async function getMovie(req,res,next)
{
    let movie;
    try {
        movie =await Movie.findById(req.params.id);
        if(movie==null) return res.status(404).json("message not found")
     }
     catch(err)
     {
         return res.status(500).json("err.message")
     }
     res.movie=movie;
     next();
}

module.exports =router;