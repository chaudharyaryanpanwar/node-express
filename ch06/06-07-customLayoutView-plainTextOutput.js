const express  = require("express")
const exphbs = require("express-handlebars")
const app = express()

const h  = exphbs.create({defaultLayout : "main"})
app.engine("handlebars" , h.engine)
app.set("view engine" ,"handlebars")



app.get("/custom-layout", (req ,res)=>{
    res.render("custom-layout" , {layout:"custom"})
    })

app.get("/text" , (req  ,res)=>{
    res.type("text/plain")
    res.send("this is a test")
})

const port = process.env.PORT || 3000
app.listen(port , ()=>console.log("server is running on port 3000"))


