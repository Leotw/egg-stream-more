const Subscription = require('egg').Subscription;

class Pull extends Subscription {
  static get schedule() {
    return {
      interval: '25m',
      type: 'worker'
    }
  }
  async subscribe() {
    const { ctx, app } = this;
    const isUpdated = ctx.service.source.checkUpdate();
    if(isUpdated) {
      app.messenger.sendToApp('refresh', 'pull');
    }
  }
}

module.exports = Pull;
