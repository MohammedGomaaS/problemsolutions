const assert = require('assert');
const app = require('../../src/app');

describe('\'problem-solutions\' service', () => {
  it('registered the service', () => {
    const service = app.service('problem-solutions');

    assert.ok(service, 'Registered the service');
  });
});
