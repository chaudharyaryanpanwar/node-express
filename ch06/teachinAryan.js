const express  = require("express");
const app = express();
const exphbs = require("express-handlebars")

const handlebars = exphbs.create({defaultLayout : "main"}).engine
app.engine("handlebars" ,handlebars);
app.set("view-enigne","handlebars");

app.use()


const port = process.env.PORT || 3002;
app.listen(port , ()=>{
    console.log("servver is running on port 3002")
})




