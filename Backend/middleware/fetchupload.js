var jwt = require('jsonwebtoken');
const Farmer = require("../Models/FarmerSchema");
const path= require('path');
const multer=require('multer');

const fetchfarmer = async (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    
    
    const token = req.header("auth");
    
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token,process.env.JWT_SECRET);
        //console.log(data.user.id);
        const farmerl = await Farmer.findById(data.user.id);
        //console.log(farmerl);
        if(!farmerl){
            res.status(403).send({ error: "Please authenticate as a farmer" });
        }
        else{
            req.user = data.user;
            next();
        }
        
        
    } catch (error) {
        //console.log(error)
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'images/')
    },
    filename: function(req,file,cb){
        let ext =  path.extname(file.originalname)
        cb(null,Date.now()+ext)
    }
})

var upload =multer({
    storage:storage,
    filefilter :function(req,file,callback){
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg"
        ){
            callback(null,true)
        }else{
            res.status(401).send({ error: "Please upload jpg or png file" })
            callback(null,false)
        }
    },
    limits:{
        filesize:1024*1024*2
    }
})

const fetchupload={fetchfarmer,upload}
module.exports = fetchupload;