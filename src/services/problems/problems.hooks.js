

const { disallow, iff } = require('feathers-hooks-common');

const associateCurrentUserToField = require('../../hooks/associate-current-user-to-field');

const restrictToOwnerOrAdmin = require('../../hooks/restrict-to-owner-or-admin');
const restrictToOwner= require('../../hooks/restrict-to-owner');
const authentication = require('../../hooks/authentication');

const populateProblemSubData = require('../../hooks/populate-problem-sub-data');

module.exports = {
  before: {
    all: [],
    find: [populateProblemSubData()],
    get: [populateProblemSubData()],
    create: [authentication(),associateCurrentUserToField()],
    update: [disallow()/*authentication(),restrictToOwner(),associateCurrentUserToField()*/],
    patch: [authentication(),restrictToOwner(),associateCurrentUserToField(),populateProblemSubData()],
    remove: [authentication(),restrictToOwnerOrAdmin(),populateProblemSubData()]
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
