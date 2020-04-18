// Installing express
var express = require("express");

// Initializing express -- app is just a convention
var app = express();


/* 
    Defining the route:
        #1- When you go to slash ("/") you're going to get a message that says "Hi there!".
        #2- when you go to slash buy ("/bye") you'll get a message that says "Goodbye!".
        #3- when you go to slash dog ("/dog") you get a message that says "MEAO!".
*/

// #1
//  app.get() takes two different parameters:
//                1) The first one is the URL or the path (root path or just root) which is slash in this case.
//                2) The second one is a function (callback function), which takes also tow parameters:
//                        a) request (abbr. ==> req):
//                        b) response (res):
//                         - req and res are actually objects inside of this function. 
//                         - request is an object that contains all the information about the request that was made that triggered this route.
//                         - response will contain all the information about what we're going to respond with.

app.get("/", function(req, res){
    res.send("<h1>Hi there!</h1>");
    console.log("app.get(\"/\") is called");
});
//#2
app.get("/bye", function(req, res){
    res.send("Goodbye!");
    console.log("app.get(\"/bye\") is called");
});
//#3
app.get("/dog", function(req, res){
    res.send("MEAO!");
    console.log("app.get(\"/dog\") is called");
});

// Route Order : The key concept is that the first route that matches a given request is the only route that will be run. 
// * : for every other path we didn't describe --> must be at the end. 
app.get("*", function(req, res){
    res.send("You're a Star");
});

// Telling express to listen for requests (starting server)... 
var port = 3000; // we can use any number (port) we want.
var message = function(){
                    console.log("Serving app.js on port: " + port + 
                        " ... \nGo to \"http://localhost:"+ port +
                        "/\" to show the content of your homepage.\nPress down CTRL+C to stop the server.");
                } // we can also don't send any message
app.listen(port, message);

