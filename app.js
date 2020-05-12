const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
require("./routes/api/upload")(app);

//users route
const users = require("./routes/api/users");

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use("/api/users", users);


app.get("/", (req, res) => res.send("LOOTTTTTT"));
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Server is running on port ${port}`));