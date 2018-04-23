// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const solutionReplies = sequelizeClient.define('solution_replies', {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  solutionReplies.associate = function (models) {
    
    solutionReplies.belongsTo(models.users);
    solutionReplies.belongsTo(models.problem_solutions);
  };

  return solutionReplies;
};
