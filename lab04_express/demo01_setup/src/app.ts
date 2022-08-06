import express from 'express';

// Consig
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.listen(PORT, () => {
  return console.log(`Server is running at http://localhost:${PORT}`);
});
