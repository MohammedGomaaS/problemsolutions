const assert = require('assert');
const app = require('../../src/app');

describe('\'problem-likes\' service', () => {
  it('registered the service', () => {
    const service = app.service('problem-likes');

    assert.ok(service, 'Registered the service');
  });
});
