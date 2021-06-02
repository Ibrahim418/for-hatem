const express = require ('express')
const router = express.Router()
const authMiddleware = require ('../helpers/authMiddleware')
const { body, validationResult } = require('express-validator');
const jwt = require ('jsonwebtoken')
const bcrypt = require('bcryptjs');
const user = require ('../models/user');
require ('dotenv').config()


//load connected user
router.get("/",authMiddleware,(req,res)=>{
user.findById(req.userID).select("-password")
.then (user=>{
    if (!user){
        return res.status(404).json({msg :'user not found'})
    }
    res.status(200).json(user)
})
.catch(err=>{
    console.log(err.message)
    res.status(500).send({msg :"server error"})
})
})
//login user
router.post("/",[
    body('email',"please enter your correct email").isEmail(),
    body('password',"please enter your password!!").notEmpty()
    ],(req, res) => { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        user.findOne({email: req.body.email})
        .then((user)=>{
            if (!user){
                return res.status(404).json({errors:[{msg:"please register fist"}]})
            }
            bcrypt.compare(req.body.password , user.password, (err,isMatch)=>{
                if (err) {
                    throw err
                }else if (!isMatch){
                    return res.status(404).json({errors : [{msg:'wrong password'}]})
                }else{let payload={
                    userID : user._id
                }
                jwt.sign(payload , process.env.SECRET_KEY , (err, token )=>{
                    if (err){
                        throw err
                    }
                    res.status(200).json({token})
                })
            }
                 
            })

        })
    })

module.exports = router
