// Initializes the `problems` service on path `/problems`
const createService = require('feathers-sequelize');
const createModel = require('../../models/problems.model');
const hooks = require('./problems.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'problems',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/problems', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('problems');

  service.hooks(hooks);
};
