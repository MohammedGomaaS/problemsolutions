const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const restrictToOwnerOrAdmin = require('../../src/hooks/restrict-to-owner-or-admin');

describe('\'restrict-to-owner-or-admin\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: restrictToOwnerOrAdmin()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
