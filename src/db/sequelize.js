import Sequelize from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite', // Ruta al archivo de la base de datos SQLite
});

//importamos los modulos
const CambioEstado = require('./models/CambioEstado_db');
const Estado = require('./models/Estado_db');
const Llamada = require('./models/Llamada_db');
const RespuestaDeCliente = require('./models/RespuestaDeCliente_db');
const RespuestaPosible = require('./models/RespuestaPosible_db');
const Cliente = require('./models/Cliente_db');
const Pregunta = require('./models/Pregunta_db');
const Encuesta = require('./models/Encuesta_db');

// Sincroniza los modelos con la base de datos
sequelize.sync({ force: true }).then(() => {
    console.log('Base de datos y tablas sincronizadas');
  });


module.exports = sequelize;
