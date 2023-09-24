app.get("/bad-bad-not-good" , (req ,res)=>{
    throw new Error ("that didnt go well!")
})

     throw in this code , "throw" is used in javascript to throw errors or custom
     exceptions , when an error is thrown it interrupts the normal flow of program 
     and immediately jumped to the nearest exception-handline code


     new Error in this code , this is creating a new instance of "Error" object
     The "Error" object in javascript is a built-in Javascript object that is 
     commonly used to repressent and propagate errors in program




app.use((err , req ,res ,next)=>{
    console.error("** SERVER ERROR :" + err.message)
    res.status(500).render("08-error" , {message: "you should not have clicked that ! "})
})

    next: The next parameter is a callback function that you can call if you want to pass control to the next middleware or route handler in the Express application. In error-handling middleware, it's typically not used because the purpose is to handle errors rather than pass control to the next middleware. However, if you want to pass control to subsequent middleware for further processing, you can use next(err) to do so.