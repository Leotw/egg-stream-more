'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async server() {
    const { ctx, config } = this;
    const { url, client, server } = config.dsn;
    const { key: clientKey, project: clientProject } = client;
    const { key: serverKey, project: serverProject } = server;
    const data = await ctx.service.home.fetchHomeData();
    await ctx.render('app.js', {
      store: data,
      url: ctx.url,
      env: config.env,
      version: config.version,
      clientCfg: `http://${clientKey}@${url}/${clientProject}`,
      serverCfg: `http://${serverKey}@${url}/${serverProject}`
    }, { markup: false });
  }

  async client() {
    const { ctx, config } = this;
    const { url, client, server } = config.dsn;
    const { key: clientKey, project: clientProject } = client;
    const { key: serverKey, project: serverProject } = server;
    const data = await ctx.service.home.fetchHomeData();
    await ctx.renderClient('app.js', {
      store: data,
      url: ctx.url,
      env: config.env,
      version: config.version,
      clientCfg: `http://${clientKey}@${url}/${clientProject}`,
      serverCfg: `http://${serverKey}@${url}/${serverProject}`
    });
  }
}

module.exports = HomeController;
