var express = require("express");
var app = express();
// var app = require("express")();

// this will tell express to serve the content of the public directory.
app.use(express.static("public"));

app.get("/", function(req, res){
    // ejs stands for embedded javascript. 
    // Whenever we render a file whatever it's called it's going to look first 
    //  in the views directory and try and find this exact file inside views. 
    // also we need to install ejs package --> npm install ejs --save
    res.render("home.ejs");
   //  res.send("Welcome to the homepage");
});

app.get("/fallinlovewith/:thing" , function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
    // res.send("You fell in love with " + thing);
});

app.get("/posts", function(req, res){
    var posts = [
        { title:"I hate programming" , auther: "Abudé Bittar"},
        { title:"Why I love Programming" , auther: "Abdulrahman Al Bittar"},
        { title:"Syria gets his freedom" , auther: "Syrian poeple"},
        { title:"Why Fh Weldel is bullshit?" , auther: "Everyone"},
        { title:"Allah Akbar" , auther: "HAHAHHAHAHAHHAHAHHAHAHHA"}
    ]
    res.render("posts.ejs", {posts: posts});
});

// Telling express to listen for requests (starting server)... 
var port = 3000; // we can use any number (port) we want.
var message = function(){
                    console.log("Serving app.js on port: " + port + 
                        " ... \nGo to \"http://localhost:"+ port +
                        "/\" to show the content of your homepage.\nPress down CTRL+C to stop the server.");
                } // we can also don't send any message
app.listen(port, message);