const Subscription = require('egg').Subscription;

class Refresh extends Subscription {
  static get schedule() {
    return {
      interval: '30m',
      type: 'all'
    }
  }

  async subscribe() {
    const { ctx } = this;
    await ctx.service.source.update();
  }
}

module.exports = Refresh;
