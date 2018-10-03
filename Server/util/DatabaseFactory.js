import {
  MongoClient,
} from 'mongodb';
import config from '../config/config';


class DataBaseFactory {
  async getClient() {
    try {
      this.con = await MongoClient.connect(config.get('db.host'), {
        useNewUrlParser: true,
      });
      this.db = this.con.db();

      if (!this.db) {
        throw new Error('Error whe initializing DB');
      }
      return this.db;
    } catch (err) {
      throw new Error(err);
    }
  }

  async closeClient() {
    if (this.mongoServer) {
      this.mongoServer.stop();
    }
  }
}

export default DataBaseFactory;
