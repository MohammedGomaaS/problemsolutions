

const associateCurrentUserToField = require('../../hooks/associate-current-user-to-field');

const restrictToOwnerOrAdmin = require('../../hooks/restrict-to-owner-or-admin');
const restrictToOwner= require('../../hooks/restrict-to-owner');
const authentication = require('../../hooks/authentication');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authentication(),associateCurrentUserToField()],
    update: [authentication(),restrictToOwner()],
    patch: [authentication(),restrictToOwner()],
    remove: [authentication(),restrictToOwnerOrAdmin()]
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
