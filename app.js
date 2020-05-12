const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys_dev').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
require("./routes/api/upload")(app);

const users = require("./routes/api/users");
const games = require("./routes/api/games")

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));


app.use(passport.initialize())
require('./config/passport')(passport)

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/games", games);


app.get("/", (req, res) => res.send("LOOTTTTTT"));
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Server is running on port ${port}`));