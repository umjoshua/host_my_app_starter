const express = require('express')
const cors = require('cors')
const { exec } = require('child_process')
const app = express()

app.use(cors())

app.use('/', express.static('public'))

app.use('/test', (req, res) => {
    res.send("<h2> test endpoint </h2>");
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening")
})
