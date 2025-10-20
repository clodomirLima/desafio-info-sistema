const { Sequelize, Model } = require("sequelize");

class Veiculo extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.BIGINT,
          autoIncrement: true,
          primaryKey: true,
          field: "Id",
        },
        placa: {
          type: Sequelize.STRING(10),
          field: "Placa",
          allowNull: false,
        },
        chassi: {
          type: Sequelize.STRING(17),
          field: "Chassi",
          allowNull: false,
        },
        renavam: {
          type: Sequelize.STRING(11),
          field: "Renavam",
          allowNull: false,
        },
        modelo: {
          type: Sequelize.STRING(100),
          field: "Modelo",
          allowNull: false,
        },
        marca: {
          type: Sequelize.STRING(100),
          field: "Marca",
          allowNull: false,
        },
        ano: {
          type: Sequelize.INTEGER,
          field: "Ano",
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Veiculo",
        freezeTableName: true,
        timestamps: false,
      }
    );

    return this;
  }
}

module.exports = Veiculo;
