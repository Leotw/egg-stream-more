'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async server() {
    const { ctx } = this;
    await ctx.render('app.js', {
      message: 'SSR Home',
      context: ctx
    });
  }

  async client() {
    const { ctx } = this;
    await ctx.renderClient('app.js', {
      content: '8888'
    });
  }
}

module.exports = HomeController;
