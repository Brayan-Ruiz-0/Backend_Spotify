import express, { Request, Response } from 'express';
import routes from './routes'
import "dotenv/config";




const app = express();
const port = process.env.PORT || 5000;

app.use(routes);


app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'The server was inicializate!' });

});
app.listen(port, ()=>{
  console.log(`Server is running on http://localhost:${port}`)
})


// mongoDB Conection

const mongoose = require('mongoose');

const usuario = "brayanruiz11111"
const password = "LcljKvSrbLeiTPNK"
const dbName = "spotifyDB"

const uri = `mongodb+srv://${usuario}:${password}@cluster0.iafj2k9.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch( e => console.log('error de conexión', e))
