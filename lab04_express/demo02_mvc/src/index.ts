import express from "express";
import path from "path";

const app = express();
const port = 3000;

// configure express to use EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});


// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server is running at http://localhost:${port}`);
});