// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const problemLikes = sequelizeClient.define('problem_likes', {
    
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  problemLikes.associate = function (models) {
    problemLikes.belongsTo(models.users);
    problemLikes.belongsTo(models.problems);
  };

  return problemLikes;
};
