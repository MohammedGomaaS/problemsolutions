

const associateCurrentUserToField = require('../../hooks/associate-current-user-to-field');

const restrictToOwner = require('../../hooks/restrict-to-owner');

const restrictToOwnerOrAdmin = require('../../hooks/restrict-to-owner-or-admin');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [associateCurrentUserToField()],
    update: [restrictToOwner()],
    patch: [restrictToOwner()],
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
