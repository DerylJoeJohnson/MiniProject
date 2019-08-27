var exp=require('express');
var bodyparser = require("body-parser");
var url="mongodb://localhost/shop"
var user=require("../model/user")
const router=exp.Router();
const path=require('path');
router.use(bodyparser.urlencoded({extended:true}))
router.use(exp.static(path.join(__dirname,"../Public")));

router.post('/login',function(req,res){
    var a= new user();
    a.username=req.body.username;
    a.password=req.body.password;
    
    user.find({username:a.username, password:a.password},function(err,result)
    {
        if(err)
        throw err;
        else
        {
            console.log(result);
            if(result.length!=0)
            {console.log("invalid details");
            res.redirect("/index")}
           // res.redirect("/index")
            else
            {console.log("LOG IN");
            res.redirect("/");}
          
        }
    })
})
            
router.get('/',function(req,res)
  {
    //res.redirect("/register");
    res.render('register');
  })


router.post('/add',function(req,res)
{
    console.log("button clicked")
    var a= new user();
    a.fname=req.body.fname;
    a.username=req.body.username;
    a.password=req.body.password;
    a.role=req.body.role;
    a.save(function(err)
    {
      if(err) throw err
      else
      {
        res.redirect("/")
      }
    })
  })
module.exports=router;