const express = require('express');
const bodyParser = require('body-parser');
// const {login} = require('./modules/auth');
const con = require('./db/connection');

const app = express();
app.use(bodyParser.json());

app.use("/auth", require("./routes/user.route"));

app.use((req, res) => {
    res.status(404).json({
      message: "Endpoint Not Found !!!",
    });
  });
// app.post('/login', (req, res)=>{
//     console.log(req.body);
//     const result = login(req.body);
//     console.log(result);
//     if(result.status===200){
//         return res.json(result);
//     }else{
//         return res.status(400).json(result);
//     }
    
// })
app.listen('5000', (res)=>{
    console.log('application is running on port 5000');
})