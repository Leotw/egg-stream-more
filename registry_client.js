const Base = require('sdk-base');

class RegistryClient extends Base {
  constructor(options) {
    super({
      initMethod: 'init'
    });
    this._options = options;
    this._registry = new Map();
  }

  async init() {
    this.ready(true);
  }

  subscribe(reg, listener) {
    const topic = reg.topic;
    if(this._registry.has(topic)) {
      const arr = this._registry.get(topic);
      arr.push(listener);
    } else {
      this._registry.set(topic, [listener]);
    }
  }

  publish(reg) {
    const { topic, data } = reg;
    if(!this._registry.has(topic)) return false;
    const arr = this._registry.get(topic);
    const len = arr.length;
    for(let i = 0; i < len; i++) {
      arr[i](data);
    }
  }

  async getData(reg) {
    return this._registry.get(reg.topic);
  }
}

module.exports = RegistryClient;
