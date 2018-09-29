import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send({ text: 'Hello World!' }));

// app.get('types', (req,res) => res.send())

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
