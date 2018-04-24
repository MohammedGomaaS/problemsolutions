

const associateCurrentUserToField = require('../../hooks/associate-current-user-to-field');

const restrictToOwner = require('../../hooks/restrict-to-owner');

const restrictToOwnerOrAdmin = require('../../hooks/restrict-to-owner-or-admin');

const authentication = require('../../hooks/authentication');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [associateCurrentUserToField(), authentication()],
    update: [restrictToOwner(), authentication()],
    patch: [restrictToOwner(), authentication()],
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
