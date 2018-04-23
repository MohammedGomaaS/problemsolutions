// Initializes the `problem-types` service on path `/problem-types`
const createService = require('feathers-sequelize');
const createModel = require('../../models/problem-types.model');
const hooks = require('./problem-types.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'problem-types',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/problem-types', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('problem-types');

  service.hooks(hooks);
};
