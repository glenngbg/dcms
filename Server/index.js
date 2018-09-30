import express from 'express';
import TypeService from './services/TypeService';
import TypeRepository from './repositories/TypesRepository';

const app = express();
const port = 3000;
const typeRepository = new TypeRepository();
const typeService = new TypeService(typeRepository);


app.get('/', (req, res) => res.send({
  text: 'Hello World!',
}));

app.get('/types', (req, res) => res.send(typeService.getAll()));

if (!module.parent) { app.listen(port, () => console.log(`Example app listening on port ${port}!`)); }
// for testing
module.exports = app;
