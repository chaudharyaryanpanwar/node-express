const express = require("express")
const exphbs = require("express-handlebars")
const app = express()

const h = exphbs.create({defaultLayout : "mian"})
app.engine("handlebars" , h.engine)
app.set("view engine" , "handlebars")


//the following layout doesnt have a layout file , so views/no-layout.handlebars 
//must contain all necessary HTML

app.get("/no-layout" , (req ,res) =>{
    res.render("no-layout" , {layout : null})
})

app.get("*" , (req ,res)=>{

    res.send("<a href = '/no-layout'>click here</a>")
})

const port = process.env.PORT || 3000
app.listen(port , ()=>{
    console.log(`server is running on ${port}`)
})
