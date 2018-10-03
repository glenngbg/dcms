import MongoDBMemoryServer from 'mongodb-memory-server';
import config from '../config/config';
import Type from '../models/type';
import Property from '../models/property';
import DataBaseFactory from '../util/DatabaseFactory';

export default before('Setup DB', async () => {
  try {
    console.log('before all start');
    const inMemoryDb = await new MongoDBMemoryServer();
    config.set('db.host', await inMemoryDb.getConnectionString());
    config.set('db.name', await inMemoryDb.getDbName());

    const db = await new DataBaseFactory().getClient();

    db.collection('types').insertMany([
      new Type('content', [new Property('name', 'string'), new Property('preamble', 'string'), new Property('body', 'string')]),
      new Type('navigationitem', [new Property('title', 'string'), new Property('url', 'string'), new Property('parent', 'string')]),
    ]);

    console.log('before all done');
  } catch (err) {
    console.log(err);
  }
});
