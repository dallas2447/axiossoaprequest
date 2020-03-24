// Initializes the `countryinfo` service on path `/api/countryinfo`
const { Countryinfo } = require('./countryinfo.class');
const hooks = require('./countryinfo.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/countryinfo', new Countryinfo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/countryinfo');

  service.hooks(hooks);
};
