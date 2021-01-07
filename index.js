const express = require('express');
const app = express();
const port = 8000;
// use express router
app.use('/', require('./routes/index.js'));
// set up view engine
app.use('view engine', 'ejs');
app.set('views','./views')

app.listen(port, function(err){
    if ( err){
        console.log(`Error: ${err} Server is not running!!`);
        return;
    }
    return console.log(`Server is running on port: ${port}`)
})