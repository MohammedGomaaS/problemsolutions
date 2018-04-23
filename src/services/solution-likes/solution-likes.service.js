// Initializes the `solution-likes` service on path `/solution-likes`
const createService = require('feathers-sequelize');
const createModel = require('../../models/solution-likes.model');
const hooks = require('./solution-likes.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'solution-likes',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/solution-likes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('solution-likes');

  service.hooks(hooks);
};
