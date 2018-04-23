// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const hooks = require('feathers-authentication-hooks');

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return hooks.restrictToRoles({
    roles: [1],
    fieldName: 'level',
    idField: 'id',
    ownerField: 'userId',
    owner: true
});
};
