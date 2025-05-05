import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello, Express' });
});

const PORT = 8080;

app.listen(8080, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server started on port ${PORT}`);
});
