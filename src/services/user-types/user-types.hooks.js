

const restrictToAdmin = require('../../hooks/restrict-to-admin');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [restrictToAdmin()],
    update: [restrictToAdmin()],
    patch: [restrictToAdmin()],
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
