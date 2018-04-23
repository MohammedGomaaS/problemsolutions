// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const { authenticate } = require('feathers-authentication').hooks;
// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return authenticate('jwt');
};
