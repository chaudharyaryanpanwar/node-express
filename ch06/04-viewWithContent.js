const express = require("express")
const exphbs = require("express-handlebars")
const app = express();
const cookieParser = require("cookie-parser")
const session = require("express-session")
const catNames = require("cat-names")


//setting engine for server side rendering
const handlebars = exphbs.create({defaultLayout : "main"})
app.engine("handlebars" , handlebars.engine)
app.set("view engine" , "handlebars")

//to enable cookie support
app.use(cookieParser())

//to enable session support 
app.use(session({
    resave :false , saveUninitialized :false , secret: "keyboard cat"
}))




app.get("/greeting",(req,res)=>{
    res.render("about1",{
        message:"welcome",
        style:req.query.style,
        userid : req.cookies.userid,
        username : req.session.username,
        

    });
});

//usning this code to set userid as cookie
app.get("/set-random-userid" , (req , res)=>{
    res.cookie("userid" , (Math.random()*10000).toFixed(0))
    res.redirect("/gretting")
})

//we are  using this to set username for session
app.get("/set-random-username" , (req ,res)=>{
    req.session.username = catNames.random()
    
    res.redirect("/greeting")
})

app.get("*" , (req ,res)=>{
    res.send("<a href='/greeting'>greeting</a>");
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Server is runnning on port http://localhost:3000")
})
