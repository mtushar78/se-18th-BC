const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator");
// const axios = require('axios');


router.get('/', (req, res)=>{
    return res.json({
        message: "this is from auth route"
    });
});

router.get('/students', (req, res)=>{
    return res.json({
        message: "this is from /auth/student route"
    });
});
module.exports = router;