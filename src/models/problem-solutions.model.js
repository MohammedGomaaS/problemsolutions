// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const problemSolutions = sequelizeClient.define('problem_solutions', {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
                  // won't allow null
        notEmpty: true          // don't allow empty strings
      }
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  problemSolutions.associate = function (models) {
    problemSolutions.belongsTo(models.problems);
    problemSolutions.belongsTo(models.users);
    problemSolutions.belongsToMany(models.users, { through: models.solution_likes });
    
  };

  return problemSolutions;
};
