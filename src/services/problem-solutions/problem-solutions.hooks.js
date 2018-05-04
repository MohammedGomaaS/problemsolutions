

const { disallow, iff } = require('feathers-hooks-common');

const associateCurrentUserToField = require('../../hooks/associate-current-user-to-field');

const restrictToOwner = require('../../hooks/restrict-to-owner');

const restrictToOwnerOrAdmin = require('../../hooks/restrict-to-owner-or-admin');

const authentication = require('../../hooks/authentication');

const preventUserFromUpdateForeignKeyForSolutionReply = require('../../hooks/prevent-user-from-update-foreign-key-for-solution-reply');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authentication(),associateCurrentUserToField()],
    update: [disallow()/*authentication(),restrictToOwner(),associateCurrentUserToField()*/],
    patch: [
      authentication(),
      restrictToOwner(),
      associateCurrentUserToField(),
      preventUserFromUpdateForeignKeyForSolutionReply()
    ],
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
