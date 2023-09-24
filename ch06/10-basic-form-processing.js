const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser  =  require("body-parser")
const app = express()

const handlebars = exphbs.create({defaultLayout : "main"})
app.engine("handlebars" , handlebars.engine)
app.set("view engine" , "handlebars")

app.use(bodyParser.urlencoded({extended:false}))

app.get("/thank-you" , (req ,res)=>res.render("10-thank-you"))

app.get("*" , (req ,res)=>res.render("10-home"))

app.post("/process-contact" , (req,res)=>{
    console.log(`received contact from ${req.body.name} <${req.body.email}`)
    res.redirect(303 , "/thank-you")
})

const port = process.env.PORT || 3000
app.listen(port , ()=>console.log("Server is running on port 3000"))
