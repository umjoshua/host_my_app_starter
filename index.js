const express = require('express')
const cors = require('cors')
const { exec } = require('child_process')
const app = express()

app.use(cors())

app.use('/', express.static('public'))

app.use('/test', (req, res) => {

    let output = "";


    exec("cat cyclic_env", (err, stdout, stderr) => {
        if (err) {
            console.error(`Error executing cat: ${err.message}`);
            return res.status(500).send('Error executing cat');
        }
        console.log("Cyclic ENV")
        console.log(stdout)

    });

    exec("cat user_env", (err, stdout, stderr) => {
        if (err) {
            console.error(`Error executing cat: ${err.message}`);
            return res.status(500).send('Error executing cat');
        }
        console.log("User ENV")
        console.log(stdout)

    });

    exec("ls -a --file-type .cyclic/", (err, stdout, stderr) => {
        if (err) {
            console.error(`Error executing cat: ${err.message}`);
            return res.status(500).send('Error executing cat');
        }


        console.log(stdout)

        res.send(output);
    });

})

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening")
})
