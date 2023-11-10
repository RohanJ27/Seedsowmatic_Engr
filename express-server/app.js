const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // Allow only a specific origin
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// test path to run python script
app.post('/run-python', (req, res) => {

    console.log(req.body)

    let arg1 = req.body.arg1;
    let arg2 = req.body.arg2;

  exec(`python3 raspberryScripts/test.py ${arg1} ${arg2}`, (err, stdout, stderr) => {
    if (err) {
      // handle error
      return res.send(`Error running script: ${stderr}`);
    }
    res.send(`Script output: ${stdout}`);
  });
});


