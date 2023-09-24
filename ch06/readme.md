In this capter we learn about request and response methods and properties in express

Some of the most common request method and properties used are :

1.req.params: This property contains route parameters extracted from the URL. For example, if you define a route like /users/:id, you can access the id parameter using req.params.id.

2.req.query: This property contains the query parameters from the URL. For example, for a URL like /search?q=express, you can access the q parameter using req.query.q.

3.req.body: This property contains the parsed request body data, typically for POST and PUT requests. To parse the request body, you need to use middleware like body-parser or express.json().

4.req.method: This property returns the HTTP request method, such as GET, POST, PUT, DELETE, etc.4.

5.req.path: This property returns the path portion of the URL. For example, for the URL /users/123, req.path would be /users/123.

6.req.hostname and req.ip: These properties return the hostname and IP address of the client making the request.

7.req.headers: This property contains the HTTP headers sent by the client as an object.

8.req.get(header): This method allows you to retrieve a specific HTTP header value from the request. For example, req.get('User-Agent') retrieves the user-agent header.

9.req.cookies: If you use a cookie-parser middleware, this property contains the parsed cookies sent by the client.

10.req.protocol: This property returns the protocol used by the client (http or https).

11.req.xhr: This property is a Boolean indicating whether the request was made via AJAX (XMLHttpRequest). It's commonly used for AJAX request detection.

12.req.is(type): This method checks if the request's content type matches the provided type. For example, you can use req.is('json') to check if the request is sending JSON data.

13.req.accepts(types): This method checks if the client accepts the provided MIME types. It's often used for content negotiation to determine the appropriate response format.

14.req.originalUrl: This property contains the original URL that was requested by the client, including query parameters.

15.req.baseUrl: This property returns the base URL on which the router was mounted.
----------------------------------------------------------------------------------------------
Most common used response methods and properties are:

1.res.send(data): This method sends a response to the client with the provided data. It automatically sets the appropriate Content-Type header based on the data type (HTML, JSON, plain text, etc.).

2.res.json(data): This method sends a JSON response to the client. It automatically sets the Content-Type header to application/json.

3.res.status(code): This method sets the HTTP status code of the response. For example, res.status(404) sets the response status to "404 Not Found."

4.res.redirect([status,] path): This method redirects the client to the specified URL. You can optionally specify the HTTP status code (e.g., 301 for permanent redirect) as the first argument.

5.res.render(view [, locals]): This method renders an HTML view template and sends it as the response. You need to specify the view template name (without the file extension) as the first argument and optionally provide local data to be used in the template.

6.res.sendFile(path [, options] [, callback]): This method sends a file as the response. You specify the file's path as the first argument. You can provide optional options and a callback function.

7.res.cookie(name, value [, options]): This method sets a cookie on the client's browser. You specify the cookie's name and value as arguments and can provide additional options like expiration and security settings.

8.res.clearCookie(name [, options]): This method clears a previously set cookie by name.

9.res.header(field [, value]): This method allows you to set an HTTP header on the response. You provide the field name and an optional value.

Properties:

10.res.statusCode: This property allows you to access or modify the HTTP status code of the response.

11.res.headersSent: This property is a Boolean that indicates whether the response headers have been sent to the client.

12.res.locals: This property provides a way to pass local variables from middleware to the view template. It's often used to share data between middleware and the view.

13.res.append(field [, value]): This property allows you to append values to the specified response header field.

14.res.set(field [, value]): This property is similar to res.append(), but it replaces the value of the specified response header field if it already exists.

15.res.type(type): This property sets the Content-Type header of the response to the specified MIME type.

16.res.vary(field): This property adds the specified field to the Vary response header. It's used for indicating that the response varies based on different values of a request header.









