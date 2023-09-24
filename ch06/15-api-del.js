const express = require("express");
const boidyParser = require("body-parser");
const app = express();

app.use(boidyParser.json())

const tours = [
    {id : 0 , name : 'Hood River' , price : 99.99},
    {id : 1 , name: 'oregon coast' , price : 129.99},
]
app.get("/api/tours",(req  , res)=>{
    res.json(tours);
})

app.delete("/api/tour/:id",(req ,res)=>{
    const idx = tours.findIndex((tour)=> tours.findIndex(tour=> tours.id === parseInt(req.params.id)));
    if (idx<0) res.json({error: 'No such tour exists'})
    tours.splice(idx , 1)
    res.json({sucess : true})
})

app.use("*" ,(req ,res)=>{
    res.send(`GET /api/tours\n` +
    `DELETE /api/tour/0 \n` +
    `GET /api/tours`);
})


const port = process.env.PORT || 3000;
app.listen(port , ()=>{
    console.log("server is runnnng on port 3000");
})