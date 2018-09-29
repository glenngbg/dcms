import express from 'express';
import Type from './models/type';
import Property from './models/property';

const app = express();
const port = 3000;

const types = [
  new Type('content', [new Property('name', 'string'), new Property('preamble', 'string'), new Property('body', 'string')]),
  new Type('navigationitem', [new Property('title', 'string'), new Property('url', 'string'), new Property('parent', 'string')]),
];

app.get('/', (req, res) => res.send({
  text: 'Hello World!',
}));

app.get('/types', (req, res) => res.send(types));

if (!module.parent) { app.listen(port, () => console.log(`Example app listening on port ${port}!`)); }
// for testing
module.exports = app;
