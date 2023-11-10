const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
app.use(cors());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Allow only a specific origin
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

function appendExampleSettings(settings) {
  // Check if settings.json already exists, and read its content if it does
  let existingSettings = [];
  if (fs.existsSync('settings.json')) {
    const existingData = fs.readFileSync('settings.json');
    existingSettings = JSON.parse(existingData);
  }

  // Append the example settings array to the existing settings array
  existingSettings = existingSettings.concat(settings);

  // Save the updated array to settings.json
  const jsonData = JSON.stringify(existingSettings, null, 2);
  fs.writeFileSync('settings.json', jsonData);

  console.log('Example settings appended to settings.json');
}