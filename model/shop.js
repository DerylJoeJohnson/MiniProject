var mongoose = require("mongoose");
var schema= mongoose.Schema; // instance created for schema

var productschema = new schema(             //schema structure
    {
        id:String,
        pname:{type:String,required:true},
        pprice:{type:Number,required:true},
        file1:{type:String,required:true},
        qty:{type:Number,required:true},
        //des:{type:String,required:true},
        
    }
)

var productmodel=mongoose.model("product",productschema,"product");  
module.exports=productmodel;