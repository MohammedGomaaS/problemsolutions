const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const populateUserSubDate = require('../../src/hooks/populate-user-sub-date');

describe('\'populate-user-sub-date\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: populateUserSubDate()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
