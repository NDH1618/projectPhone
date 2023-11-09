
const express = require('express');
const app = express();
const session = require("express-session");
const config = require("config");

const share = require("./middleware/share");


app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));


app.use(express.urlencoded({extended: true}));


app.use("/static", express.static(config.get("app.static_folder")));


app.set("views", config.app.views );
app.set("view engine", config.app.view_engine );

app.use(share);

const routes = require(config.get("app.router"))
app.use(routes);

module.exports = app;


















// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.write("Hello, world!");
//     res.end();
//     console.log("server running on prot" +port)
    
// }).listen(port=8080);
// console.log("hi nodejs")


