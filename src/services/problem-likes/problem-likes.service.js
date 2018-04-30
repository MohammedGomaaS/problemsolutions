// Initializes the `problem-likes` service on path `/problem-likes`
const createService = require('feathers-sequelize');
const createModel = require('../../models/problem-likes.model');
const hooks = require('./problem-likes.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'problem-likes',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/problem-likes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('problem-likes');

  //service.disable('patch', '');
  service.hooks(hooks);
};
