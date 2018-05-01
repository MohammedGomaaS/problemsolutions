

const associateCurrentUserToField = require('../../hooks/associate-current-user-to-field');

const authentication = require('../../hooks/authentication');
const restrictToOwner= require('../../hooks/restrict-to-owner');
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authentication(),associateCurrentUserToField()],
    update: [authentication()],
    patch: [authentication()],
    remove: [authentication(),restrictToOwner()]
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
