// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    
    
    context.params.sequelize = {
      include: [{
        model: context.app.services.users.Model,
        attributes: ['name', 'email', 'image']
       
      },{
        model: context.app.services['problem-types'].Model,
        attributes: ['description']
       
      }]
    }
    // problemId=context.id;
    // userId=	context.params.user.id;

    // context.app.service('problem-likes').get()
    // return context;
  };
};
