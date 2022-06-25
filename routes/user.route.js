const express = require("express");
const router = express.Router();
const con = require("../db/connection");
const jwt = require("jsonwebtoken");

const { check, validationResult } = require("express-validator");
// const axios = require('axios');

// Login a user
router.post(
    "/login", [
        //validation
        check("email", "email is required").isEmail(),
        check("password", "Enter a password with 6 or more length").isLength({
            min: 6,
        }),
    ],
    (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({
                error: error.array(),
            });
        }
        let query = `select * from users where email = '${req.body.email}' and password = '${req.body.password}'`;
        // making the db query
        con.query(query,
            (error, result) => {
                if (error) {
                    console.log(error);
                }
                // console.log(typeof(result));
                if (result.length > 0) {
                    const payload = {
                        email: result.email,
                        user_name: result.user_name,
                    };

                    jwt.sign(
                        payload,
                        "DIIT18thBatchB&C", {
                            expiresIn: 360000,
                        },
                        (err, token) => {
                            if (err) throw err;
                            return res.status(200).json({
                                token: token,
                            });
                        }
                    );
                } else {
                    return res.status(403).json({
                        message: "Unauthorized access!",
                    });
                }
            }
        );
    }
);
// Register a new user
router.post(
    "/register", [
        //validation
        check("email", "email is required").isEmail(),
        check("user_name", "user name is required").notEmpty(),
        check("role", "role is required").notEmpty(),
        check("password", "Enter a password with 6 or more length").isLength({
            min: 6,
        }),
    ],
    (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({
                error: error.array(),
            });
        }
        let query = `insert into users (email, user_name, role, password) 
                values('${req.body.email}', '${req.body.user_name}', ${req.body.role}, '${req.body.password}')`;
        // making the db query
        con.query(query,
            (error, result) => {
                if (error) {
                    // console.log(error.sqlMessage);
                    return res.status(400).json({
                        message: error.sqlMessage,
                    });
                }
                // console.log((result));
                if (result) {
                    return res.json({
                        message: "user registration is successful!!"
                    })
                } else {
                    return res.status(400).json({
                        message: "unable to create user",
                    });
                }
            }
        );

    }
);
module.exports = router;