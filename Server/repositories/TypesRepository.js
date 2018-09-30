import Type from '../models/type';
import Property from '../models/property';

export default class {
  findAll() {
    this.types = [
      new Type('content', [new Property('name', 'string'), new Property('preamble', 'string'), new Property('body', 'string')]),
      new Type('navigationitem', [new Property('title', 'string'), new Property('url', 'string'), new Property('parent', 'string')]),
    ];
    return this.types;
  }
}
