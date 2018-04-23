// Application hooks that run for every service
const logger = require('./hooks/logger');

const authentication = require('./hooks/authentication');

module.exports = {
  before: {
    all: [ logger() ],
    find: [],
    get: [],
    create: [authentication()],
    update: [authentication()],
    patch: [authentication()],
    remove: [authentication()]
  },

  after: {
    all: [ logger() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [ logger() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
