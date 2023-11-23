const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Cliente = sequelize.define('Cliente', {
    idCliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    dni: {
        type: DataTypes.INTEGER,
    },
    nombreCompleto: {
        type: DataTypes.STRING,
    },
    nroCelular: {
        type: DataTypes.STRING,
    }
});

module.exports = Cliente;
export default Cliente;
