const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const restrictToOwner = require('../../src/hooks/restrict-to-owner');

describe('\'restrict-to-owner\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: restrictToOwner()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
