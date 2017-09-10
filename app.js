const express = require('express');
const path = require('path');
const webpack = require('webpack');
const app = express();


const DIST_DIR = path.join(__dirname, "dist");
app.use(express.static(DIST_DIR));
app.get("*", function (req, res) {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


var config = require('./webpack.config');
var compiler = webpack(config);
compiler.run(function (err, stats) {
    //console.log(stats.toJson()); // по завершению, выводим всю статистику
});