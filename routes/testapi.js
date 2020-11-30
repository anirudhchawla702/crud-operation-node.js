var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://anirudh:angel%4012345@cluster0.l87fs.mongodb.net/anirudh?authSource=admin&replicaSet=atlas-10we0o-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
var finalresult;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("firstdatabase");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("anirudh").find({}).toArray(function(err,result){
    if(err)throw err;
    finalresult = result;
    console.log(result);
    db.close();
  });
});

// /api/register 
router.post("/register", async function(req,res,next){
    var a = 10;
    var b = 20;
    var sum = a+b;
    console.log(sum);
    res.json(finalresult);
});

module.exports = router;



