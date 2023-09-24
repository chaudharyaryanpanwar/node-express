cookie parser are used for storing information such as their preferences

express session also does almost the same job but it is more secure as it saves data in server side unlike cookie-parser , also it can be larger in size as cookie-parser are limited to the size of 4kb.

here cat-names module just conatins cat names as suggested by their name

app.use(session({
    resave :false , saveUninitialized :false , secret: "keyboard cat"
}))

    in this code 
    resave : false 
    it tells the server not to save the session data on each request if the session data is not modified

    saveUnintialized : false
    it tells the server not to save or store session , when a user visits the website and does not make any modifications (like adding shopping items in cart)

    secret : "keyboard cat" 
    it is used to sign the sessionIDcookie

