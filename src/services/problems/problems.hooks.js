

const associateCurrentUserToField = require('../../hooks/associate-current-user-to-field');

const restrictToOwnerOrAdmin = require('../../hooks/restrict-to-owner-or-admin');

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
