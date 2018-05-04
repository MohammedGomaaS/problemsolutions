const hooks = require('feathers-authentication-hooks');


module.exports = function (options = {}) {
  
  return  hooks.associateCurrentUser({ idField: 'id', as: 'userId' });
};
