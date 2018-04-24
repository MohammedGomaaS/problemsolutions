

const associateCurrentUserToField = require('../../hooks/associate-current-user-to-field');

const authentication = require('../../hooks/authentication');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [associateCurrentUserToField(), authentication()],
    update: [authentication()],
    patch: [authentication()],
    remove: [authentication()]
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
