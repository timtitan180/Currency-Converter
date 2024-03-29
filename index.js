const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

port = process.env.PORT || 1255;

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"public/converter.html"));
}); 

app.listen(port,function(err){
    if(err) {
        console.log(err);
    }
    console.log(`Server running on port ${port}`);
});
