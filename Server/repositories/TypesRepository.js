import logger from '../logger';

export default class {
  constructor(db) {
    if (!db) {
      throw new Error('Repository must have an db reference');
    }
    this.db = db;
  }

  async findAll() {
    try {
      logger.debug('getting data from db');
      return await this.db.collection('types').find().toArray();
    } catch (err) {
      logger.error(err);
      return [];
    }
  }
}
