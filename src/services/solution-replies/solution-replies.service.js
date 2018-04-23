// Initializes the `solution-replies` service on path `/solution-replies`
const createService = require('feathers-sequelize');
const createModel = require('../../models/solution-replies.model');
const hooks = require('./solution-replies.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'solution-replies',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/solution-replies', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('solution-replies');

  service.hooks(hooks);
};
