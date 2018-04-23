// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const problems = sequelizeClient.define('problems', {
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
  problems.associate = function (models) {
    problems.belongsTo(models.users);
    problems.belongsTo(models.problem_types)
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return problems;
};