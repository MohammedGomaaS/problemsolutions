const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const preventUserFromUpdateForeignKeyForSolutionReply = require('../../src/hooks/prevent-user-from-update-foreign-key-for-solution-reply');

describe('\'prevent-user-from-update-foreign-key-for-solution-reply\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: preventUserFromUpdateForeignKeyForSolutionReply()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
