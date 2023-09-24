const express = require("express");
const app = express();

const tours = [
    { id: 0, name: 'Hood River', price: 99.99 },
    { id: 1, name: 'Oregon Coast', price: 149.95 },
    ];
    
app.get("/api/tours" , (req , res)=>{
    res.json(tours)
})

app.use("*" , (req ,res)=>{
    res.send("main website is running on <a href='/api/tours'> click here to go to main working of website</a>");
})

const port = process.env.PORT || 3000;
app.listen(port , ()=>{
    console.log(`server is running on port ${port}`);
})