const assert = require('assert');
const app = require('../../src/app');

describe('\'solution-replies\' service', () => {
  it('registered the service', () => {
    const service = app.service('solution-replies');

    assert.ok(service, 'Registered the service');
  });
});
