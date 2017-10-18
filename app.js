const express = require('express');
const path = require('path');
const webpack = require('webpack');
const app = express();
const DIST_DIR = path.join(__dirname, "dist");

var config = require('./webpack.config');
var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
       noInfo: true, publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get("*", function (req, res) {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
