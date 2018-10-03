import express from 'express';
import expressWinston from 'express-winston';
import config from './config/config';
import TypeService from './services/TypeService';
import TypeRepository from './repositories/TypesRepository';
import DatabaseFactory from './util/DatabaseFactory';
import logger from './logger';


class App {
  constructor() {
    logger.debug('App Created.');
  }

  async init() {
    this.app = express();
    this.app.use(expressWinston.logger({
      winstonInstance: logger,
    }));

    logger.debug(config.toString());
    const databaseFactory = new DatabaseFactory();
    const db = await databaseFactory.getClient();
    const typeRepository = new TypeRepository(db);

    const typeService = new TypeService(typeRepository);

    logger.debug('Setting up endpoints');

    this.app.get('/', (req, res) => res.send({
      text: 'Hello World!',
    }));

    this.app.get('/types', async (req, res) => {
      const types = await typeService.getAll();
      res.send(types);
    });

    return this.app;
  }
}
export default App;
