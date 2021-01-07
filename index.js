const express = require('express');
const app = express();
const port = 8000;
app.use('/', require('./routes/index.js'));
app.listen(port, function(err){
    if ( err){
        console.log(`Error: ${err} Server is not running!!`);
        return;
    }
    return console.log(`Server is running on port: ${port}`)
})