var exp=require('express');
var bodyparser = require("body-parser");
var url="mongodb://localhost/shop"
var product=require("../model/shop")
const router=exp.Router();
const path=require('path');
router.use(bodyparser.urlencoded({extended:true}))
var multer = require('multer'); //module to upload files
var upload=multer({dest:'images/'})
var type=upload.single('img');

router.use(exp.static(path.join(__dirname,"../Public")));

router.get("/",function(req,res)
{
    res.render('shop')
})
router.get("/add",function(req,res)
{
    res.render('add')
})
router.post('/add',type,function(req,res){
    res.send("file uploaded successfully....")
    var p = new product();
    p.id = req.body.pid;
    p.file1= req.file.filename;
    p.pname=req.body.pname;
    p.pprice=req.body.price;
    p.qty=req.body.qty;
    p.save((err)=>{
        if (err) throw err;
        else{
            console.log("Product added");
          
        }
    })
})
router.get("/view/:image",function(req,res){
    res.sendFile(__dirname+'/images/'+req.params.image)
})

router.get('/view',function(req,res)
{   product.find({},function(err,result){
    if(err)
    throw err;
    else
    console.log(result)
   
  res.render('shop',{product1:result})
})

})
module.exports=router;