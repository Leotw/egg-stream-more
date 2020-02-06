module.exports = options => {
  return async function page(ctx, next) {
    const { path } = options;
    await next();
    if(path.test(ctx.originalUrl)) {
      ctx.set('Cache-Control', 'no-cache');
    }
  };
};
