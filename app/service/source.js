const Service = require('egg').Service;

class Source extends Service {
  constructor(prop) {
    super(prop);
    this.cache = [];
  }

  static get(id) {
    return this.cache[id];
  }

  async update() {
    const { app } = this;
    const data = await Promise.resolve(`status:${Math.random() * 100}`);
    this.cache.push(data);
    app.logger.info(`${data} from Source`);
  }

  async checkUpdate() {
    return await Promise.resolve(1);
  }
}

module.exports = Source;
