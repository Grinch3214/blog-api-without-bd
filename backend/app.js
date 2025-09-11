import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
// import pg from 'pg';
import { pool } from './db.js';

// const { Pool } = pg;

// const pool = new Pool({
//   user: 'user',
//   host: 'localhost',
//   database: 'mydb',
//   password: 'password',
//   port: 15434,
// });

const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('PostgreSQL connect is successful!');
    client.release();
  } catch (err) {
    console.error('Error connect PostgreSQL:', err);
  }
};

export { pool };

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(router);

app.listen(port, async () => {
  console.log(`Server running on http://localhost:${port}`);
  await testConnection();
});
