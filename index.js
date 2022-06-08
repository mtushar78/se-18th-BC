const express = require('express');
const bodyParser = require('body-parser');
const {login} = require('./modules/auth');
const app = express();
app.use(bodyParser.json());
app.get('/', (req,res)=>{
    return res.send('The project is working fine!');
});
app.get('/students', (req, res)=>{
    return res.send('Hello students!!')
})
app.post('/login', (req, res)=>{
    console.log(req.body);
    const result = login(req.body);
    console.log(result);
    if(result.status===200){
        return res.json(result);
    }else{
        return res.status(400).json(result);
    }
    
})
app.listen('5000', (res)=>{
    console.log('application is running on port 5000');
})