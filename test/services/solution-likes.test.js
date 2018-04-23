const assert = require('assert');
const app = require('../../src/app');

describe('\'solution-likes\' service', () => {
  it('registered the service', () => {
    const service = app.service('solution-likes');

    assert.ok(service, 'Registered the service');
  });
});
