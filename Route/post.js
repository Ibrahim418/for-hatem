const express =require('express')
const router = express.Router()
const authMiddleware = require ('../helpers/authMiddleware')
const Post = require ('../models/Post')
const user = require('../models/user')

// add new post 
router.post ('/',authMiddleware, (req,res)=>{
    let newPost = new Post ({...req.body, owner : req.userID})
    newPost.save()
        .then ((post)=> res.status(201).send(post))
        .catch ((err)=>{ console.log(err.message);
        res.status(500).send({msg:"server error"})
        })
})

//get all post 
router.get('/', authMiddleware, (req,res)=>{
    Post.find()
    .then((posts)=>res.send(posts))
    .catch ((err)=>{
        console.log(err.message);
        res.status(500).send({msg:'server error'})
    })
})
//get user's posts 
router.get('/myPosts', authMiddleware, (req,res)=>{
    user.find({owner :req.userID})
    .catch ((err)=>{
        console.log(err.message);
        res.status(500).send({msg:'server error'})
    })
})




module.exports = router