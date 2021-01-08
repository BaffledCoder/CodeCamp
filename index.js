const express = require('express');
const app = express();
const port = 8000;
const expressLayout = require('express-ejs-layouts');

app.use(expressLayout);
// EXTRACT STYLE AND SCRIPTS FROM SUB PAGES INTO THE LAYOUT
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
// use express router
app.use('/', require('./routes/index.js'));
// set up view engine
app.set('view engine', 'ejs');
app.set('views','./views')
app.use(express.static(__dirname + '/assets'));
app.listen(port, function(err){
    if ( err){
        console.log(`Error: ${err} Server is not running!!`);
        return;
    }
    return console.log(`Server is running on port: ${port}`)
})