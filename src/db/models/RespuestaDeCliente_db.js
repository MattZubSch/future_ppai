const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const RespuestaDeCliente = sequelize.define('RespuestaDeCliente', {
    idRespuestaDeCliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fechaEncuesta: {
        type: DataTypes.STRING,
    },
    idRespuestaPosible: {
        type: DataTypes.INTEGER,
    },
    idLlamada: {
        type: DataTypes.INTEGER,
    },
});

const RespuestaPosible = require('./RespuestaPosible_db');
const Llamada = require('./Llamada_db');

RespuestaDeCliente.belongsTo(RespuestaPosible, { foreignKey: 'idRespuestaPosible' });
RespuestaDeCliente.belongsTo(Llamada, { foreignKey: 'idLlamada' });

module.exports = RespuestaDeCliente;