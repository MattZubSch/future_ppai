class RespuestaPosible{
    constructor(descripcion, valor) {
        this.descripcion = descripcion;
        this.valor = valor;
    }
    getDescripcionRta(){
        return this.descripcion;
    }
    getValorRta(){
        return this.valor;
    }
}

//respuestas posibles a preguntas de dificultad
const rtaPos_dif_1 = new RespuestaPosible("Muy difícil", 1);
const rtaPos_dif_2 = new RespuestaPosible("Difícil", 2);
const rtaPos_dif_3 = new RespuestaPosible("Moderadamente difícil", 3);
const rtaPos_dif_4 = new RespuestaPosible("Algo difícil", 4);
const rtaPos_dif_5 = new RespuestaPosible("Ni difícil ni fácil", 5);
const rtaPos_dif_6 = new RespuestaPosible("Algo fácil", 6);
const rtaPos_dif_7 = new RespuestaPosible("Moderadamente fácil", 7);
const rtaPos_dif_8 = new RespuestaPosible("Fácil", 8);
const rtaPos_dif_9 = new RespuestaPosible("Bastante fácil", 9);
const rtaPos_dif_10 = new RespuestaPosible("Muy fácil", 10);
//array de respuestas posibles a preguntas de dificultad
const array_rtaPos_dif = [rtaPos_dif_1, rtaPos_dif_2, rtaPos_dif_3, rtaPos_dif_4, rtaPos_dif_5, rtaPos_dif_6, rtaPos_dif_7, rtaPos_dif_8, rtaPos_dif_9, rtaPos_dif_10];

//respuestas posibles a preguntas de afirmacion
const rtaPos_afir_dif_1 = new RespuestaPosible("Si, fue facil", 1);
const rtaPos_afir_dif_2 = new RespuestaPosible("No, fue dificil", 2);
//array de respuestas posibles a preguntas de afirmacion
const array_rtaPos_afir_dif = [rtaPos_afir_dif_1, rtaPos_afir_dif_2];

//array preguntas 1 y 2 (dificultad)
const rtas_dif = [array_rtaPos_dif, array_rtaPos_afir_dif];

//respuestas posibles a preguntas de velocidad
const rtaPos_vel_1 = new RespuestaPosible("Muy lento", 1);
const rtaPos_vel_2 = new RespuestaPosible("Lento", 2);
const rtaPos_vel_3 = new RespuestaPosible("Moderadamente lento", 3);
const rtaPos_vel_4 = new RespuestaPosible("Algo lento", 4);
const rtaPos_vel_5 = new RespuestaPosible("Normal", 5);
const rtaPos_vel_6 = new RespuestaPosible("Algo rápido", 6);
const rtaPos_vel_7 = new RespuestaPosible("Moderadamente rápido", 7);
const rtaPos_vel_8 = new RespuestaPosible("Rápido", 8);
const rtaPos_vel_9 = new RespuestaPosible("Bastante rápido", 9);
const rtaPos_vel_10 = new RespuestaPosible("Muy rápido", 10);
//array de respuestas posibles a preguntas de velocidad
const array_rtaPos_vel = [rtaPos_vel_1, rtaPos_vel_2, rtaPos_vel_3, rtaPos_vel_4, rtaPos_vel_5, rtaPos_vel_6, rtaPos_vel_7, rtaPos_vel_8, rtaPos_vel_9, rtaPos_vel_10];

//respuestas posibles a preguntas de afirmacion
const rtaPos_afir_vel_1 = new RespuestaPosible("Si, fue rapido", 1);
const rtaPos_afir_vel_2 = new RespuestaPosible("No, fue lento", 2);
//array de respuestas posibles a preguntas de afirmacion
const array_rtaPos_afir_vel = [rtaPos_afir_vel_1, rtaPos_afir_vel_2];

//array preguntas 3 y 4 (velocidad)
const rtas_vel = [array_rtaPos_vel, array_rtaPos_afir_vel];

//respuestas posibles a preguntas de utilidad
const rtaPos_util_1 = new RespuestaPosible("Para nada útil", 1);
const rtaPos_util_2 = new RespuestaPosible("Poco útil", 2);
const rtaPos_util_3 = new RespuestaPosible("Ligeramente útil", 3);
const rtaPos_util_4 = new RespuestaPosible("Algo útil", 4);
const rtaPos_util_5 = new RespuestaPosible("Moderadamente útil", 5);
const rtaPos_util_6 = new RespuestaPosible("Bastante útil", 6);
const rtaPos_util_7 = new RespuestaPosible("Muy útil", 7);
const rtaPos_util_8 = new RespuestaPosible("Sumamente útil", 8);
const rtaPos_util_9 = new RespuestaPosible("Extremadamente útil", 9);
const rtaPos_util_10 = new RespuestaPosible("Indispensable", 10);
//array de respuestas posibles a preguntas de utilidad
const array_rtaPos_util = [rtaPos_util_1, rtaPos_util_2, rtaPos_util_3, rtaPos_util_4, rtaPos_util_5, rtaPos_util_6, rtaPos_util_7, rtaPos_util_8, rtaPos_util_9, rtaPos_util_10];

//respuestas posibles a preguntas de afirmacion
const rtaPos_afir_util_1 = new RespuestaPosible("Si, fue util", 1);
const rtaPos_afir_util_2 = new RespuestaPosible("No, no es util", 2);
//array de respuestas posibles a preguntas de afirmacion
const array_rtaPos_afir_util = [rtaPos_afir_util_1, rtaPos_afir_util_2];

//array preguntas 5 y 6 (utilidad)
const rtas_util = [array_rtaPos_util, array_rtaPos_afir_util];

//respuestas posibles a preguntas de satisfacción
const rtaPos_sat_1 = new RespuestaPosible("Muy insatisfecho", 1);
const rtaPos_sat_2 = new RespuestaPosible("Insatisfecho", 2);
const rtaPos_sat_3 = new RespuestaPosible("Moderadamente insatisfecho", 3);
const rtaPos_sat_4 = new RespuestaPosible("Algo insatisfecho", 4);
const rtaPos_sat_5 = new RespuestaPosible("Neutro", 5);
const rtaPos_sat_6 = new RespuestaPosible("Algo satisfecho", 6);
const rtaPos_sat_7 = new RespuestaPosible("Moderadamente satisfecho", 7);
const rtaPos_sat_8 = new RespuestaPosible("Satisfecho", 8);
const rtaPos_sat_9 = new RespuestaPosible("Bastante satisfecho", 9);
const rtaPos_sat_10 = new RespuestaPosible("Muy satisfecho", 10);
//array de respuestas posibles a preguntas de satisfacción
const array_rtaPos_sat = [rtaPos_sat_1, rtaPos_sat_2, rtaPos_sat_3, rtaPos_sat_4, rtaPos_sat_5, rtaPos_sat_6, rtaPos_sat_7, rtaPos_sat_8, rtaPos_sat_9, rtaPos_sat_10];

//respuestas posibles a preguntas de afirmacion
const rtaPos_afir_sat_1 = new RespuestaPosible("Si, estoy satisfecho/a", 1);
const rtaPos_afir_sat_2 = new RespuestaPosible("No, no estoy satisfecho/a", 2);
//array de respuestas posibles a preguntas de afirmacion
const array_rtaPos_afir_sat = [rtaPos_afir_sat_1, rtaPos_afir_sat_2];

//array preguntas 7 y 8 (satisfacción)
const rtas_sat = [array_rtaPos_sat, array_rtaPos_afir_sat];


//respuestas posibles a preguntas de amabilidad
const rtaPos_ama_1 = new RespuestaPosible("Muy desagradable", 1);
const rtaPos_ama_2 = new RespuestaPosible("Desagradable", 2);
const rtaPos_ama_3 = new RespuestaPosible("Moderadamente desagradable", 3);
const rtaPos_ama_4 = new RespuestaPosible("Algo desagradable", 4);
const rtaPos_ama_5 = new RespuestaPosible("Neutro", 5);
const rtaPos_ama_6 = new RespuestaPosible("Algo amable", 6);
const rtaPos_ama_7 = new RespuestaPosible("Moderadamente amable", 7);
const rtaPos_ama_8 = new RespuestaPosible("Amable", 8);
const rtaPos_ama_9 = new RespuestaPosible("Bastante amable", 9);
const rtaPos_ama_10 = new RespuestaPosible("Muy amable", 10);
//array de respuestas posibles a preguntas de amabilidad
const array_rtaPos_ama = [rtaPos_ama_1, rtaPos_ama_2, rtaPos_ama_3, rtaPos_ama_4, rtaPos_ama_5, rtaPos_ama_6, rtaPos_ama_7, rtaPos_ama_8, rtaPos_ama_9, rtaPos_ama_10];


//respuestas posibles a preguntas de afirmacion
const rtaPos_afir_ama_1 = new RespuestaPosible("Si, muy amable", 1);
const rtaPos_afir_ama_2 = new RespuestaPosible("No, fue poco amable", 2);
//array de respuestas posibles a preguntas de afirmacion
const array_rtaPos_afir_ama = [rtaPos_afir_ama_1, rtaPos_afir_ama_2];

//array preguntas 9 y 10 (amabilidad)
const rtas_ama = [array_rtaPos_ama, array_rtaPos_afir_ama];


//respuestas posibles a preguntas de calidad
const rtaPos_cal_1 = new RespuestaPosible("Pésimo", 1);
const rtaPos_cal_2 = new RespuestaPosible("Muy malo", 2);
const rtaPos_cal_3 = new RespuestaPosible("Deficiente", 3);
const rtaPos_cal_4 = new RespuestaPosible("Malo", 4);
const rtaPos_cal_5 = new RespuestaPosible("Regular", 5);
const rtaPos_cal_6 = new RespuestaPosible("Bueno", 6);
const rtaPos_cal_7 = new RespuestaPosible("Muy bueno", 7);
const rtaPos_cal_8 = new RespuestaPosible("Excelente", 8);
const rtaPos_cal_9 = new RespuestaPosible("Sobresaliente", 9);
const rtaPos_cal_10 = new RespuestaPosible("Excepcional", 10);
//array de respuestas posibles a preguntas de calidad
const array_rtaPos_cal = [rtaPos_cal_1, rtaPos_cal_2, rtaPos_cal_3, rtaPos_cal_4, rtaPos_cal_5, rtaPos_cal_6, rtaPos_cal_7, rtaPos_cal_8, rtaPos_cal_9, rtaPos_cal_10];

//respuestas posibles a preguntas de afirmacion
const rtaPos_afir_cal_1 = new RespuestaPosible("Si, fue muy claro", 1);
const rtaPos_afir_cal_2 = new RespuestaPosible("No, fue ambiguo", 2);
//array de respuestas posibles a preguntas de afirmacion
const array_rtaPos_afir_cal = [rtaPos_afir_cal_1, rtaPos_afir_cal_2];

//array preguntas 11 y 12 (calidad)
const rtas_cal = [array_rtaPos_cal, array_rtaPos_afir_cal];

//respuestas posibles a preguntas de probabilidad
const rtaPos_pos_1 = new RespuestaPosible("Imposible", 1);
const rtaPos_pos_2 = new RespuestaPosible("Muy improbable", 2);
const rtaPos_pos_3 = new RespuestaPosible("Altamente improbable", 3);
const rtaPos_pos_4 = new RespuestaPosible("Poco probable", 4);
const rtaPos_pos_5 = new RespuestaPosible("Neutro", 5);
const rtaPos_pos_6 = new RespuestaPosible("Algo probable", 6);
const rtaPos_pos_7 = new RespuestaPosible("Probable", 7);
const rtaPos_pos_8 = new RespuestaPosible("Muy probable", 8);
const rtaPos_pos_9 = new RespuestaPosible("Altamente probable", 9);
const rtaPos_pos_10 = new RespuestaPosible("Totalmente", 10);
//array de respuestas posibles a preguntas de probabilidad
const array_rtaPos_pos = [rtaPos_pos_1, rtaPos_pos_2, rtaPos_pos_3, rtaPos_pos_4, rtaPos_pos_5, rtaPos_pos_6, rtaPos_pos_7, rtaPos_pos_8, rtaPos_pos_9, rtaPos_pos_10];

//respuestas posibles a preguntas de afirmacion
const rtaPos_afir_pos_1 = new RespuestaPosible("Si, lo recomendaria", 1);
const rtaPos_afir_pos_2 = new RespuestaPosible("No, no lo recomendaria", 2);
//array de respuestas posibles a preguntas de afirmacion
const array_rtaPos_afir_pos = [rtaPos_afir_pos_1, rtaPos_afir_pos_2];

//array preguntas 13 y 14 (probabilidad)
const rtas_pos = [array_rtaPos_pos, array_rtaPos_afir_pos];


//array de paquetes de respuestas posibles
const array_paq_rtaPos = [rtas_dif, rtas_vel, rtas_util, rtas_sat, rtas_ama, rtas_cal, rtas_pos];

export default array_paq_rtaPos;