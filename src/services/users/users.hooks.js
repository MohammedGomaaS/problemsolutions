
const hooks = require('feathers-authentication-hooks');
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [hooks.restrictToOwner({ idField: 'id', ownerField: 'id' })],
    patch: [hooks.restrictToOwner({ idField: 'id', ownerField: 'id' })],
    remove: [ hooks.restrictToRoles({
      roles: [1],
      fieldName: 'level',
      idField: 'id',
      ownerField: 'id',
      owner: true
  })]
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
