const  express = require('express');

const app = express();
const port = 3000;

app.get("/",(req,res) =>{
    return res.send("Hello World");
});


const admin = (req, res)=> {
    return res.send("This is admin dashboard");
};

const isAdmin = (req, res, next)=> {
    console.log("Admin is running");
    next();
}

const isLoggedIn = (req, res, next) =>{
    console.log("isLoggedIn running");
    next();
};
 

app.get("/admin", isLoggedIn, isAdmin, admin);

app.get("/signout", (req,res)=>{
    return res.send("You are signed out");
});

app.get("/instagram", (req,res)=>{
    return res.send("Instagram id: obaidcool");
});

app.listen(port,()=>{
    console.log("Listening on port");
});