var exp=require("express");
const app=exp();
var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
const path=require("path");
app.use(exp.static(path.join(__dirname,"/Public")));
app.set("view engine","ejs");
app.set("views","./src/views");
 var userrouter=require("./routes/userrouter")
 app.use("/user",userrouter);
 var prouter=require("./routes/prouter")
 app.use("/shop",prouter);
var mongoose=require("mongoose");
var url="mongodb://localhost/shop";
var user=require("./model/user")

mongoose.connect(url,function(err)
{
    if(err)
    throw err;
    else
        console.log("DB Connected!");
})
app.get("/",function(req,res)
{
    res.render('login')
})
app.get("/index",function(req,res)
{
    res.render('index')
})
// app.get("/shops",function(req,res)
// {
//     res.render('shop')
// })

app.listen(3000,function(){
    console.log("You are Being Served")
})