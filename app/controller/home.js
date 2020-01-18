'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async server() {
    const { ctx, app, config } = this;
    const { url, client, server } = config.dsn;
    const { key: clientKey, project: clientProject } = client;
    const { key: serverKey, project: serverProject } = server;
    await ctx.render('app.js', {
      message: 'SSR Home',
      url: ctx.url,
      env: app.env,
      version: config.version,
      clientCfg: `http://${clientKey}@${url}/${clientProject}`,
      serverCfg: `http://${serverKey}@${url}/${serverProject}`
    }, { markup: false });
  }

  async client() {
    const { ctx } = this;
    await ctx.renderClient('app.js', {
      content: 'Client render'
    });
  }
}

module.exports = HomeController;
