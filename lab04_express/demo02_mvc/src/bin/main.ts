import app from '../app';
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();
const port:string = process.env.PORT !== undefined ? process.env.PORT : '3000';
app.set('port', port);


const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
