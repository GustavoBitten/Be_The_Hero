const express = require('express')
const cors = require('cors')
const route = require('./routes')


const app = express()

app.use(cors())
app.use(express.json())
app.use(route)





app.listen(3333,()=>{console.log("Server está Online")})