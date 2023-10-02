const express = require('express')
const cors = require('cors')
const { exec } = require('child_process')
const app = express()

app.use(cors())

app.use('/', express.static('public'))

app.use('/test', (req, res) => {

    let output = "";


    exec("cat package.json", (err, stdout, stderr) => {
        if (err) {
            console.error(`Error executing cat: ${err.message}`);
            return res.status(500).send('Error executing cat');
        }

        output += `<h2>cat command output:</h2>${stdout}\n`;

        console.log(output)
        res.send(output);
    });

})

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening")
})
