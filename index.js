const express = require('express')
const cors = require('cors')
const { exec } = require('child_process')
const app = express()

app.use(cors())

app.use('/', express.static('public'))

app.use('/test', (req, res) => {

    let output = "";

    exec("ls", (err, stdout, stderr) => {
        if (err) {
            console.error(`Error executing ls: ${err.message}`);
            return res.status(500).send('Error executing ls');
        }

        output += `<h2>ls command output:</h2>\n${stdout}\n`;

        exec("cat index.js", (err, stdout, stderr) => {
            if (err) {
                console.error(`Error executing cat: ${err.message}`);
                return res.status(500).send('Error executing cat');
            }

            output += `<h2>cat command output:</h2>${stdout}\n`;


            res.send(output);
        });
    });

})

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening")
})
