import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.status(200).send("Hiya")
});

app.listen(3000, ()=> console.log('Server running'));
