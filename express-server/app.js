const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// test path to run python script
app.get('/run-python', (req, res) => {ß
  exec('python3 raspberryScripts/test.py', (err, stdout, stderr) => {
    if (err) {
      // handle error
      return res.send(`Error running script: ${stderr}`);
    }
    res.send(`Script output: ${stdout}`);
  });
});
