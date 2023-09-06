const express= require("express")
const app = express();

app.disable("x-powered-by")
//X-Powered-By: Express
//it specifies the tech stack used to build the website
//it is disabled for security reasons
app.get('*' ,(req ,res)=>{
    res.send("<h3>In dev tools under Network check headers , there will be no x-powered-by header</h3>")
})

const port = process.env.port || 3000;

app.listen(port , ()=>{
    console.log("Server is running on http://localhost:3000")
})
