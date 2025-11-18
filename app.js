import express from 'express';
import bugsRoute from './routes/bugs.js';
const app = express();
app.use(express.json());
app.use('/api/bugs', bugsRoute);
export default app;
