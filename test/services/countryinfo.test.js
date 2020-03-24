const assert = require('assert');
const app = require('../../src/app');

describe('\'countryinfo\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/countryinfo');

    assert.ok(service, 'Registered the service');
  });
});
