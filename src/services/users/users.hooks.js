
const hooks = require('feathers-authentication-hooks');
const preventUserFromCreateHimSelfAsAdmin = require('../../hooks/prevent-user-from-create-him-self-as-admin');
const preventUserFromUpdateHimSelfAsAdmin = require('../../hooks/prevent-user-from-update-him-self-as-admin');
const { authenticate } = require('feathers-authentication').hooks;
const {keep, iff, isProvider} = require('feathers-hooks-common');
const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

const populateUserSubDate = require('../../hooks/populate-user-sub-date');

module.exports = {
  before: {
    all: [populateUserSubDate()],
    find: [],
    get: [],
    create: [preventUserFromCreateHimSelfAsAdmin(),hashPassword()],
    update: [
      authenticate('jwt'),
      hooks.restrictToRoles({
        roles: [1],
        fieldName: 'userTypeId',
        idField: 'id',
        ownerField: 'id',
        owner: true
    }),
      preventUserFromUpdateHimSelfAsAdmin(),

    ],
    patch: [authenticate('jwt'),
      hooks.restrictToRoles({
        roles: [1],
        fieldName: 'userTypeId',
        idField: 'id',
        ownerField: 'id',
        owner: true
    }),
      preventUserFromUpdateHimSelfAsAdmin()
    ],
    remove: [authenticate('jwt'),
       hooks.restrictToRoles({
      roles: [1],
      fieldName: 'userTypeId',
      idField: 'id',
      ownerField: 'id',
      owner: true
  })]
  },

  after: {
    all: [],
    find: [ protect('password') ],
    get: [ /*iff(isProvider('external'), keep('id', 'email', 'firstName', 'lastName')),*/ protect('password') ],
    create: [ protect('password') ],
    update: [ protect('password') ],
    patch: [ protect('password') ],
    remove: [ protect('password') ]
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
