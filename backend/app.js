import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB online'))
  .catch((err) => console.log('error MongoDB:', err));

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
