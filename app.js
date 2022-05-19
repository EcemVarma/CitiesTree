const express = require('express');
const fs = require('fs');
const app = express();
let path = require('path');
const router = express.Router();
var http = require('http')


router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/treeView.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/getData',function(req,res){
    let obj = JSON.parse(fs.readFileSync('turkiye.json', 'utf8'));
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(obj));
});

router.get('/images/:documentName',function(req,res){
    res.sendFile(path.join(__dirname + '/images/' + req.params['documentName']));
});


//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');