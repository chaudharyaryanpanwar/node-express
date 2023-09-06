const express = require("express")
const exphbs = require("express-handlebars")
const app = express();

//setting engine for server side rendering
const handlebars = exphbs.create({defaultLayout : "main"})
app.engine("handlebars" , handlebars.engine)
app.set("view engine" , "handlebars")

app.get("/greeting",(req,res)=>{
    res.render("about",{
        message:"welcome",
        style:req.query.style,
        userid : req.cookies.userid,
        username : req.session.username,
    });
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Server is runnning on port http://localhost:3000")
})
