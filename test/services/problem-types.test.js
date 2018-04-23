const assert = require('assert');
const app = require('../../src/app');

describe('\'problem-types\' service', () => {
  it('registered the service', () => {
    const service = app.service('problem-types');

    assert.ok(service, 'Registered the service');
  });
});
