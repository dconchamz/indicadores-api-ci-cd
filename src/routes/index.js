const indicatorRoutes = require('./indicator');
const apiV1 = '/v1/indicators';

module.exports = (app) => {
    app.use(`${apiV1}`, indicatorRoutes);
};
  