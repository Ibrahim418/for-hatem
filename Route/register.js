const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const User = require ('../models/user')
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken')
require ('dotenv').config()

// register user
router.post('/',[

body('firstname',"fisrt name should be only alphabetic letter").isAlpha(),
body('lastname',"fisrt name should be only alphabetic letter").isAlpha(),
body('email',"please enter your correct email").isEmail(),
body('phone').isNumeric(),
body('password',"your password must be more than 5 caracter").isLength({ min: 5 })
],(req, res) => { 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

User.find({email : req.body.email})
.then (users=>{
    if (users.length){
        return res.status(400).send({errors:[{msg:"user aready exist"}]})
    }
    let newUser = new User (req.body)
    bcrypt.genSalt(10 , (err,salt)=>{
        if (err){
            throw err
        }
        bcrypt.hash(req.body.password,salt ,(err,hashedpsw)=>{
            if (err){
                throw err;
            }
            newUser.password = hashedpsw;
            console.log(newUser)

            newUser.save();
        let payload={
            userID : newUser._id
        }
        jwt.sign(payload , process.env.SECRET_KEY , (err, token )=>{
            if (err){
                throw err
            }
            res.send({token})
        })
        })
    })
 
})
 } )



module.exports = router ;