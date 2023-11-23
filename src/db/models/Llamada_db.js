const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Llamada = sequelize.define('Llamada', {
    idLlamada: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descripcionOperador: {
        type: DataTypes.STRING,
    },
    detalleAccionRequerida: {
        type: DataTypes.STRING,
    },
    duracion: {
        type: DataTypes.STRING,
    },
    encuestaEnviada: {
        type: DataTypes.BOOLEAN,
    },
    observacionAuditor: {
        type: DataTypes.STRING,
    },
    idCliente: {
        type: DataTypes.INTEGER,
    }
});

const Cliente = require('./Cliente_db');

Llamada.belongsTo(Cliente, { foreignKey: 'idCliente' });

module.exports = Llamada;
