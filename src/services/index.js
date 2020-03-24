const countryinfo = require('./countryinfo/countryinfo.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(countryinfo);
};
