'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async server() {
    const { ctx } = this;
    await ctx.render('app.js', {
      message: 'SSR Home',
    });
  }

  async client() {
    const { ctx } = this;
    await ctx.renderClient('app.js', {
      content: 'Client render'
    });
  }
}

module.exports = HomeController;
