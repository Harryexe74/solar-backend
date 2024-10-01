import express from 'express';

const app = express();

// Your middleware and routes here
app.get('/', (req, res) => {
  res.send('Hello from Express');
});

export default app;

