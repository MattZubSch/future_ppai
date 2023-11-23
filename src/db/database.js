import { openDB } from 'react-sqlite-hook/dist';

export const dbPromise = openDB('PPAI', 1, {
    onCreate: async (db) => {
      // Crear las tablas
      await db.exec(`
        CREATE TABLE IF NOT EXISTS CambioEstado (
            idCambioEstado INTEGER PRIMARY KEY,
            fechaHoraInicio TEXT,
            fechaHoraFin TEXT,
            idEstado INTEGER,
            idLlamada INTEGER,
            FOREIGN KEY (idEstado) REFERENCES Estado (idEstado),
            FOREIGN KEY (idLlamada) REFERENCES Llamada (idLlamada)
        );
  
        CREATE TABLE IF NOT EXISTS Cliente (
            idCliente INTEGER PRIMARY KEY,
            dni INTEGER,
            nombreCompleto TEXT,
            nroCelular INTEGER
        );
  
        CREATE TABLE IF NOT EXISTS Encuesta (
            idEncuesta INTEGER PRIMARY KEY,
            descripcion TEXT,
            fechaFinVigencia TEXT
        );
  
        CREATE TABLE IF NOT EXISTS Estado (
            idEstado INTEGER PRIMARY KEY,
            nombre TEXT
        );
  
        CREATE TABLE IF NOT EXISTS Llamada (
            idLlamada INTEGER PRIMARY KEY,
            descripcionOperador TEXT,
            detalleAccionRequerida TEXT,
            duracion TEXT,
            encuestraEnviada TEXT,
            observacionAuditor TEXT
            idCliente INTEGER,
            FOREIGN KEY (idCliente) REFERENCES Cliente (idCliente)
        );
  
        CREATE TABLE IF NOT EXISTS Pregunta (
            idPregunta INTEGER PRIMARY KEY,
            pregunta TEXT,
            idEncuesta INTEGER,
            FOREIGN KEY (idEncuesta) REFERENCES Encuesta (idEncuesta)
        );
  
        CREATE TABLE IF NOT EXISTS RespuestaCliente (
            idRespuestaCliente INTEGER PRIMARY KEY,
            fechaEncueta TEXT,
            idRespuesta INTEGER,
            idLlamada INTEGER,
            FOREIGN KEY (idLlamada) REFERENCES Llamada (idLlamada),
            FOREIGN KEY (idRespuesta) REFERENCES RespuestaPosible (idRespuestaPosible)
        );
  
        CREATE TABLE IF NOT EXISTS RespuestaPosible (
            idRespuestaPosible INTEGER PRIMARY KEY,
            descripcion TEXT,
            valor INTEGER,
            idPregunta INTEGER,
            FOREIGN KEY (idPregunta) REFERENCES Pregunta (idPregunta)
        );
      `);
    },
  });