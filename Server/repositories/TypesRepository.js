export default class {
  constructor(db) {
    if (!db) {
      throw new Error('Repository must have an db reference');
    }
    this.db = db;
  }

  async findAll() {
    try {
      return await this.db.collection('types').find().toArray();
    } catch (err) {
      console.log(err);
      return [];
    }
  }
}
