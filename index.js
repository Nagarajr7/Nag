const { response } = require('express')
const express=require('express')
const mongoose=require('mongoose')
const app=express()
const moviesRouter =require("./router/movies.js")
const PORT=process.env.PORT ||3000
const DATABASR_URL =process.env.DATABASE_URL || 'mongodb://localhost/movies'
const Movie =require('./models/movie.js')
app.use(express.json())
mongoose.connect('mongodb://localhost/movies',{useUnifiedTopology :true});
var db=mongoose.connection;
db.on("error",error => console.error(error))
db.once("open",() =>console.log("hi"))
app.use('/movies',moviesRouter)

/*
var ab=[{id:10,lesson:'qnnq'},
{id: 10,lesson :'djjd'},
{id:4 ,lesson:'fnfk'}]

var abds=13
//console.log(ff)
//console.log(ab.10)
app.get('/name/lesson',function(req,res)
{
    const les =ab.find(function(l)
    {

      return l.id==parseInt(req.params.id);

    })
   // console.log(les)
    if(!les)
    {
       res.send('fhuowhfuhf') 
    }
    res.send(ab)
    
})
app.post('/name/lesson',function(req,res)
{
  
  const lesson={
    id :ab.length+1,
    lesson:req.body.lesson

  }
  ab.push(lesson)
  res.send(lesson)
})
app.put('/name/lessons/:id',function(req,res)
{
  const leson =ab.find(function(l)
    {

      return l.id==parseInt(req.params.id);

    })
    if(!leson)
    {
      res.status(404).send("the lesson id was not found")
    }
    if(!req.body.lesson || req.body.lesson.length <3)
    {
      res.status(404).send(" hqfn")
    }
    leson.lesson=req.body.lesson;
    res.send(leson);


})
app.delete('/name/lessons/:id',function(req,res)
{
  const leson =ab.find(l => l.id==parseInt(req.params.id) )

    if(!leson) res.status(404).send("the lesson id was not found")
    const index=ab.indexOf(leson)
    ab.splice(index,1)
    res.send(ab)
})

*/
app.listen(3000)
var a=10
console.log('bfbfbw:${a}')