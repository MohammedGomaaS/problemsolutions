// Initializes the `problem-solutions` service on path `/problem-solutions`
const createService = require('feathers-sequelize');
const createModel = require('../../models/problem-solutions.model');
const hooks = require('./problem-solutions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'problem-solutions',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/problem-solutions', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('problem-solutions');

  service.hooks(hooks);
};
