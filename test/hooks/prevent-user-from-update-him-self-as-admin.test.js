const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const preventUserFromUpdateHimSelfAsAdmin = require('../../src/hooks/prevent-user-from-update-him-self-as-admin');

describe('\'prevent-user-from-update-him-self-as-admin\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: preventUserFromUpdateHimSelfAsAdmin()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
