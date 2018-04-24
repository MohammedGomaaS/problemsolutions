// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const { BadRequest } = require('@feathersjs/errors');

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    if(context.data.userTypeId=='1'&&context.params.user.userTypeId!=1){
      throw new BadRequest('you can not create yourself as admin');
    }
    return context;
  };
};
