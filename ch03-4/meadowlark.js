const express = require('express');
const app = express();

//set up handlebars view engine
const exphbs = require('express-handlebars')
const handlebars = exphbs.create({defaultLayout : 'main'})

app.engine('handlebars', handlebars.engine);
app.set('view engine' , 'handlebars')

const port = process.env.PORT || 3000;



let fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs. ",
    "Do not fear what you dont know.",
    "You will have a pleasant surprise.",
    "Whenver possible  , keep it simple.",
];












app.get('/' , (req,res)=>{
    res.render('home');
})
//app.get is the method using which we are adding routes
//app.VERB( it takes two parameters path and function)
//VERB= get , most
//the path defines the routes 
app.get('/about',(req ,res)=>{
    let randomfortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about',{fortune : randomfortune});
})
//'/about''/About/ ,'/about?foo=bar' they are all same for express , they all will work 
//it does not care about the case or trailing-slash


app.use((req , res)=>{
    
    res.status(404);
    res.render('404');
});

app.use((err ,req , res , next)=>{
    console.error(err.stack)
    
    res.status(500);
    res.render('500');
})


app.listen(port , ()=>{
    console.log(`Express started on http://localhost: ${port}`)
});
