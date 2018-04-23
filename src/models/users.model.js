// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        
         // checks for uppercase
        notNull: true,            // won't allow null
        
        notEmpty: true,           // don't allow empty strings
        
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,  
        // checks for uppercase
       notNull: true,            // won't allow null
       
       notEmpty: true,           // don't allow empty strings
       
     }
      
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
       notNull: true,            // won't allow null
       notEmpty: true,           // don't allow empty strings
     }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$",
        notNull: true,            // won't allow null
        notEmpty: true,           // don't allow empty strings
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
  users.associate = function (models) {
    users.belongsTo(models.user_types);
  };

  return users;
};
