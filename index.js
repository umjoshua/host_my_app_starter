const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use('/',express.static('public'))
app.use('/test',(req,res)=>{
    res.send("<h1>Testing</h1>")
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Listening")
})
