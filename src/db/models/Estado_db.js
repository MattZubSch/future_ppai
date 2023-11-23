// EstadoModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Estado = sequelize.define('Estado', {
  idEstado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
});

module.exports = Estado;
