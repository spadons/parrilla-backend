const express = require('express');
const Max6675 = require('max6675-raspi');

const app = express()
const port = 3000

const CS = 4;
const SCK = 24;
const SO = [25];
const UNIT = 1;
const max6675 = new Max6675();
max6675.setPin(CS,SCK,SO,UNIT);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);

})




