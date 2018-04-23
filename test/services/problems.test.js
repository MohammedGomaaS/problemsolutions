const assert = require('assert');
const app = require('../../src/app');

describe('\'problems\' service', () => {
  it('registered the service', () => {
    const service = app.service('problems');

    assert.ok(service, 'Registered the service');
  });
});
