const express = require ('express')
const connectDB = require ('./helpers/connectDB')
const app = express()


// connect the database 
connectDB()

// middlware 
app.use(express.json())

// define route 
app.use ("/register" , require('./Route/register'))
app.use ("/login" , require('./Route/login'))
app.use ("/post" , require('./Route/post'))

const port = process.env.port || 5000 

app.listen ( port , ()=> console.log(' server is runninig'))

