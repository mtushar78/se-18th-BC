const express = require('express');
const bodyParser = require('body-parser');
// const {login} = require('./modules/auth');


const app = express();
app.use(bodyParser.json());

app.use("/auth", require("./routes/user.route"));

app.use((req, res) => {
    res.status(404).json({
        message: "Endpoint Not Found !!!",
    });
});
app.listen('5000', (res) => {
    console.log('application is running on port 5000');
})