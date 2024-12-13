const express = require("express");
const app = express();
const bodyparser = require("body-parser")
const productroutes = require("./router/productroutes");

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
 res.setHeader('Access-Control-Allow-Credentials', true);
 next();
});

app.use('/products', productroutes)

app.listen(4002,()=>{
 console.log("server started at port 4000")
});
module.exports = app;
