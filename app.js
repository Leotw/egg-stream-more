const Sentry = require('@sentry/node');
module.exports = appInfo => {
  /* 监控配置 */
  const { config } = appInfo;
  switch (config.env) {
    case 'prod':
      Sentry.init({
        dsn: config.dsn.serverCfg,
        release: `egg-stream-more@${config.version}`
      });
      break;
    case 'local':
    default:
      Sentry.init({ dsn: 'http://689670b5edf44822a1ea59b4f671c773@localhost:9000/2' });
      break;
  }

  /* 接受定时任务 */
  appInfo.messenger.on('refresh', (msg) => {
    appInfo.logger.info(`update by ${msg}`);
    const context = appInfo.createAnonymousContext();
    context.runInBackground(async () => {
      await context.service.source.update();
    });
  })
};
