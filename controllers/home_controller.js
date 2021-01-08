module.exports.home = function (req, res){
    console.log("Shubhamhome");
    return res.render('home.ejs', {
        title: "Home"
    });
};