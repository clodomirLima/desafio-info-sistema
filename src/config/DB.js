const Sequelize = require("sequelize");
require("dotenv").config();

const get = () => {
  const dbName = "desafio";
  const dbUser = "root";
  const dbPassword = "";
  const dbHost = "localhost";
  const dbPort = "3306";
  const dbDialect = "mysql";

  return {
    dialect: dbDialect,
    host: dbHost,
    username: dbUser,
    password: dbPassword,
    database: dbName,
    port: dbPort,
    logging: false,
    define: {
      underscored: true,
      underscoredAll: true,
      freezeTableName: false,
      timestamps: false,
    },
  };
};

module.exports = {
  get,
  Op: Sequelize.Op,
  Sequelize,
};
