import express, { Request, Response } from 'express';
import routes from './routes'

const app = express();
const port = 5000; 

app.use(routes);


app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'The server was inicializate!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
