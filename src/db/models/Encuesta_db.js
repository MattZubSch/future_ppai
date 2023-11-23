const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Encuesta = sequelize.define('Encuesta', {
    idEncuesta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    fechaFinVigencia: {
        type: DataTypes.STRING,
    },
    });

module.exports = Encuesta;