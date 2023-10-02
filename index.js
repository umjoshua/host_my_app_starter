const express = require('express')
const cors = require('cors')
const { exec } = require('child_process')
const app = express()

app.use(cors())

app.use('/', express.static('public'))

app.use('/test', (req, res) => {

    let output = "";

    exec("cat .cyclic/build_options.json", (err, stdout, stderr) => {
        if (err) {
            console.error(`Error executing cat: ${err.message}`);
            return res.status(500).send('Error executing cat');
        }

        
        console.log("BUILD OPTIONS")
        console.log(stdout)

        res.send(output);
    });
    exec("cat .cyclic/start", (err, stdout, stderr) => {
        if (err) {
            console.error(`Error executing cat: ${err.message}`);
            return res.status(500).send('Error executing cat');
        }
        
        console.log("START")
        console.log(stdout)

        res.send(output);
    });

})

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening")
})
