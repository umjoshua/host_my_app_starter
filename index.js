const express = require('express')
const cors = require('cors')
const { exec } = require('child_process')
const app = express()

app.use(cors())

app.use('/', express.static('public'))
app.use('/test', (req, res) => {

    exec("ls", (err, stdout, stderr) => {
        if(err) console.log(err)
        if(stdout) console.log(stdout)
        if(stderr) console.log(stderr)

    })
    exec("cat index.js", (err, stdout, stderr) => {
        if(err) console.log(err)
        if(stdout) console.log(stdout)
        if(stderr) console.log(stderr)

    })
    res.send("<h1>Testing</h1>")
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening")
})
