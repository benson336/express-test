const express = require("express");
const app = express();
const path = require("path");
const users = require('./usersDatabase')
const logger = require("./middleware/logger");
//const exphbs = require("express-handlebars");

/*
app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});
*/

/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
*/

//set static folder
app.use(express.static(path.join(__dirname, "public")));


//Members API Routes
app.use("/api/users", require("./routes/api/users"));


//Inite Middleware
app.use(logger);

//Body Parder Midleware
app.use(express.json());  
app.use(express.urlencoded({ extended: false }));

//Handle Bar Middleware
/*app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");*/





const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server stated at port ${PORT}`)
);