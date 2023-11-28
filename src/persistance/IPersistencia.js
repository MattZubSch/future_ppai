import { recuperarLlamadas } from "./PersistenteLlamada.js";
import { recuperarEncuestas } from "./PersistenteEncuesta.js";

export async function recuperarObjetos() {
    try {
      const llamadasPromise = recuperarLlamadas();
      const encuestasPromise = recuperarEncuestas();
  
      const [llamadas, encuestas] = await Promise.all([llamadasPromise, encuestasPromise]);
  
      return { llamadas, encuestas };
    } catch (error) {
      console.error('Error al obtener datos:', error);
      return Promise.resolve({ llamadas: [], encuestas: [] });
    }
  }
  


