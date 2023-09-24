const express = require("express")
const exphbs = require("express-handlebars")
const app = express()

const h = exphbs.create({defaultLayout :"main"})
app.engine("handlebars" , h.engine)
app.set("view engine" , "handlebars")

app.get("/" , (req ,res)=>{
    res.render("09-home")
})

app.get("/page1" , (req  ,res)=>{
    res.render("09-page" , {page: 1})
})
app.get("/page2" , (req  ,res)=>{
    res.render("09-page" , {page: 2})
})
app.get("/page3" , (req  ,res)=>{
    res.render("09-page" , {page: 3})
})

//this is the last handler in the chain..... if no other routes match ,
//this will note that it will match any HTTP verb , not just GET

app.use((req ,res)=>{
    res.status(404).render("not-found")
})

const port = process.env.PORT || 3000

app.listen(port ,()=>console.log("server is running on localhost://3000"))
