const Sequelize = require('sequelize');
const { Op } = Sequelize;
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
};

module.exports = function (app) {
  const connectionString = app.get('mysql');
  const sequelize = new Sequelize(connectionString, {
    dialect: 'mysql',
    logging: false,
    operatorsAliases,
    define: {
      freezeTableName: true
    }
  });
  const oldSetup = app.setup;

  app.set('sequelizeClient', sequelize);

  app.setup = function (...args) {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const models = sequelize.models;
    Object.keys(models).forEach(name => {
      if ('associate' in models[name]) {
        models[name].associate(models);
      }
    });
    
    // Sync to the database
    sequelize.sync();
    createDefaultUser();
    function createDefaultUser() {

      sequelize.models.user_types
        .findOrCreate({ where: { id: '1' }, defaults: { level: 1, description: "admin" } })
        .spread((user_type, created) => {
          console.log("Default user_type", user_type.get({
            plain: true
          }))

        });
        sequelize.models.users
        .findOrCreate({ where: { id: '1' }, defaults: { name: "admin", email: "admin@domain.com", mobile: "01150441989", image: "./", password: "$2a$12$8QzxqPWThT8.SyySWlA4DOUa3ZK1mOjaEnxCroR49CKAvaZC9Cjsq", level: 1 } })
        .spread((user, created) => {
          console.log("Default Admin", user.get({
            plain: true
          }))

        });

    }

    //return Model.create({ name: "admin", email: "admin@domain", mobile: "01150441989", image: "./", password: "$2a$12$8QzxqPWThT8.SyySWlA4DOUa3ZK1mOjaEnxCroR49CKAvaZC9Cjsq", createdAt: "2018-05-01 09:30:48", updatedAt: "2018-05-01 09:30:48", level: 1 });




    return result;
  };
};
