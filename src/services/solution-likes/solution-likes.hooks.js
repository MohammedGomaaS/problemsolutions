

const associateCurrentUserToField = require('../../hooks/associate-current-user-to-field');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [associateCurrentUserToField()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
