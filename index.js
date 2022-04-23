import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import ejs from "ejs";
import sequelize from './utils/database.js';
import User from './model/user.js';

User.create();
    
sequelize.sync();
sequelize.sync({force:true});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded(
  { extended: true }
));


const middleware = (req, res, next) => {
    console.log("hello");
    next();
}

app.get("/", middleware, (req, res) => {
    res.render("home");
});



app.get("/about", (req, res) => {
    res.render("about");
});


app.post("/", (req, res) => {
    var name = req.body.first + " " + req.body.second;
    console.log(req.body.second);
    console.log(req.body.email);
    res.send("Welcome... " + name);
});


app.listen(3000, function(){
    console.log("server is running on port 3000");
});