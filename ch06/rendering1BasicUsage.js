const express = require("express");
const app = express();


//basic usage
app.get("/about" ,(req , res)=>{
    //res.send("<h1>This is about page</h1>");
    res.render("about")
})


//response code other than 200
app.get("/error", (req , res)=>{
    res.status(500);
    res.render("error");
    //can also be written as :
    //res.status(500).render("error")
})

//passing a context to view , including querystring , cookie  , and session values

app.get('/greeting' , (req , res) => {
    res.render('about', {
        message: 'welcome',
        style : req.query.style,
        userid : req.cookie.userid,
        username : req.session.username,
    });
});


//rendering a view without a layout 
//the following layout doesn't have a layout file , so views/no-layout.handlebars
//must include all necessary HTML
app.get("/no-layout" ,(req ,res)=>{
    res.render("no-layout" , {layout : null});
})

//rendering a view with a custom layout
app.get("/custom-layout" , (req , res)=>{
    res.render("custom-layout" , {layout : "custom"});
})

app.get("/test" , (req ,res)=>{
    res.type("text/plain");
    res.send("this is a text");
});

//adding an error handler
//this should appear after all routes
//note that even if you dont need the "next"
//funciton , it must be included for Express
//to recpgninze this as an error handler
app.use((err, req ,res , next)=>{
    console.error(err.stack);
    res.status(500).render("error");
})

//adding a 404 handler
//this should also appera after all of your routes
app.use((req ,res)=>{
    res.status(404).render("not-found");
})

app.listen(3000 , ()=>{
    console.log("Server is running on http://localhost:3000");
})
