const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Pregunta = sequelize.define('Pregunta', {
    idPregunta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    idEncuesta: {
        type: DataTypes.INTEGER,
    },
    });

const Encuesta = require('./Encuesta_db');

Pregunta.belongsTo(Encuesta, { foreignKey: 'idEncuesta' });

module.exports = Pregunta;