Body Parsing refers to the process of extracting and converting the data from the request body into a format that our server can work with javascript .This data can be in various format such 
as JSON , urlencoded   , or even raw text


app.use(bodyParser.urlencoded({extended:false}))
    in code {extended:false} , 
        the option "extended" controls how the middleware parses URl-encoded data
        when it is set to false {extended : false}
            it uses the built in `querystring` library from node.js to parse the data
            this library does not support passing nesterd or array objects
            by `extending to false` we are configfuring the middleware to pass the url-encoded 
            data in simpler way



