const { disallow, iff } = require('feathers-hooks-common');

const restrictToAdmin = require('../../hooks/restrict-to-admin');
const authentication = require('../../hooks/authentication');
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authentication(), restrictToAdmin()],
    update: [disallow()/*authentication(), restrictToAdmin()*/],
    patch: [authentication(), restrictToAdmin()],
    remove: [authentication(), restrictToAdmin()]
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
