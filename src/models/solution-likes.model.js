// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const solutionLikes = sequelizeClient.define('solution_likes', {
    
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  solutionLikes.associate = function (models) {
    // solutionLikes.belongsTo(models.users);
    // solutionLikes.belongsTo(models.problem_solutions);
    
  };

  return solutionLikes;
};
