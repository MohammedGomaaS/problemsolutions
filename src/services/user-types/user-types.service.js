// Initializes the `user-types` service on path `/user-types`
const createService = require('feathers-sequelize');
const createModel = require('../../models/user-types.model');
const hooks = require('./user-types.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'user-types',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-types', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('user-types');

  service.hooks(hooks);
};
