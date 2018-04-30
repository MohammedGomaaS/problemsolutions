const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const populateProblemSubData = require('../../src/hooks/populate-problem-sub-data');

describe('\'populate-problem-sub-data\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: populateProblemSubData()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
