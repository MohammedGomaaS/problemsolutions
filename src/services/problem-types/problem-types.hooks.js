

const associateCurrentUserToField = require('../../hooks/associate-current-user-to-field');
const restrictToOwner = require('../../hooks/restrict-to-owner');
const restrictToAdmin = require('../../hooks/restrict-to-admin');
const authentication = require('../../hooks/authentication');
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [associateCurrentUserToField(), restrictToAdmin(), authentication()],
    update: [restrictToOwner(), restrictToAdmin(), authentication()],
    patch: [restrictToOwner(), restrictToAdmin(), authentication()],
    remove: [restrictToAdmin(), authentication()]
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
