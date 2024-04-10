import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connection from './config/db.js';
import collectioRouter from './routes/collection.route.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

app.get('/', (req, res) => {
  res.send('Hi, this is basic backend');
});
app.use('/api/collection', collectioRouter);
app.listen(PORT, async () => {
  try {
    await connection;
    console.log('Server running successfully');
  } catch (error) {
    console.log(error);
  }
});
