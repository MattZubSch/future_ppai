const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const RespuestaPosible = sequelize.define('RespuestaPosible', {
    idRespuestaPosible: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    idPregunta: {
        type: DataTypes.INTEGER,
    },
    });

const Pregunta = require('./Pregunta_db');

RespuestaPosible.belongsTo(Pregunta, { foreignKey: 'idPregunta' });

module.exports = RespuestaPosible;