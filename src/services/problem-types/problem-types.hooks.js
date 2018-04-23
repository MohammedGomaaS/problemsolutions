

const associateCurrentUserToField = require('../../hooks/associate-current-user-to-field');
const restrictToOwner = require('../../hooks/restrict-to-owner');
const restrictToAdmin = require('../../hooks/restrict-to-admin');
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [associateCurrentUserToField(), restrictToAdmin()],
    update: [restrictToOwner(), restrictToAdmin()],
    patch: [restrictToOwner(), restrictToAdmin()],
    remove: [restrictToAdmin()]
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
