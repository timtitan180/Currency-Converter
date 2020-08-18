const express = require('express');
const path = require('path');

const app = express();
port = 1255;

app.use(express.static('public'));

app.get('/',function(request,response){
    response.sendFile(__dirname + '/converter.html');
});

app.listen(port,function(err){
    if(err) {
        console.log(err);
    }
    console.log(`Server running on port ${port}`);
})