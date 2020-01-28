const Sentry = require('@sentry/node');
module.exports = appInfo => {
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
};
