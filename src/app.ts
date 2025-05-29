// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import itemRoutes from './routes/items';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/items', itemRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
