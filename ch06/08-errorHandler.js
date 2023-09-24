const express = require("express")
const exphbs = require("express-handlebars")
const app = express()


const h = exphbs.create({defaultLayout : "main"})
app.engine("handlebars" , h.engine)
app.set("view engine" , "handlebars")


app.get("/bad-bad-not-good" , (req ,res)=>{
    throw new Error ("that didnt go well!")
})

app.get("*" , (req  , res)=>{
    res.render("08-click-here")
})

//this should appear AFTER all of your routes 
//note that even if you didnt need the "next"
//function , it must be included for Express 
//to recognize this as an error handler
app.use((err , req ,res ,next)=>{
    console.error("** SERVER ERROR :" + err.message)
    res.status(500).render("08-error" , {message: "you should not have clicked that ! "})
})//here next is used to pass the control to new middleware

const port = process.env.PORT || 3000
app.listen(port , ()=>console.log("server is running on server localhost://3000"))