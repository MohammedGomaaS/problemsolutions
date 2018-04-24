const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const preventUserFromCreateHimSelfAsAdmin = require('../../src/hooks/prevent-user-from-create-him-self-as-admin');

describe('\'prevent-user-from-create-him-self-as-admin\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: preventUserFromCreateHimSelfAsAdmin()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
