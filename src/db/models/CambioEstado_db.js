const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const CambioEstado = sequelize.define('CambioEstado', {
  idCambioEstado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fechaHoraInicio: {
    type: DataTypes.STRING,
  },
  fechaHoraFin: {
    type: DataTypes.STRING,
  },
  idEstado: {
    type: DataTypes.INTEGER,
  },
  idLlamada: {
    type: DataTypes.INTEGER,
  },
});

const Estado = require('./Estado_db');
const Llamada = require('./LlamadaModel');

CambioEstado.belongsTo(Estado, { foreignKey: 'idEstado' });
CambioEstado.belongsTo(Llamada, { foreignKey: 'idLlamada' });


module.exports = CambioEstado;
