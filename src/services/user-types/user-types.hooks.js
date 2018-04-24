

const restrictToAdmin = require('../../hooks/restrict-to-admin');

const authentication = require('../../hooks/authentication');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [restrictToAdmin(), authentication()],
    update: [restrictToAdmin(), authentication()],
    patch: [restrictToAdmin(), authentication()],
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
