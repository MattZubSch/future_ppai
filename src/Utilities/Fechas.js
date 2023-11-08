class Fechas {
    constructor() {

    }
    crearObjetoFecha(milisegundos) {
        // Crear un objeto Date a partir de la fecha aleatoria en milisegundos
        const fechaAleatoria = new Date(fechaAleatoriaMs);
        // Generar un número aleatorio entre 0 y 23 para las horas
        const aleatorioHoras = Math.floor(Math.random() * 24);
        // Generar un número aleatorio entre 0 y 59 para los minutos
        const aleatorioMinutos = Math.floor(Math.random() * 60);
        // Establecer las horas y minutos en la fecha aleatoria
        fechaAleatoria.setHours(aleatorioHoras);
        fechaAleatoria.setMinutes(aleatorioMinutos);
        // Devolver la fecha aleatoria
        return fechaAleatoria;
    }
    generarFechaAleatoria(fechaInicio, fechaFin, formato) {
        // Convertir las fechas a milisegundos
        const fechaInicioMs = fechaInicio.getTime();
        const fechaFinMs = fechaFin.getTime();
        // Calcular la diferencia en milisegundos entre las dos fechas
        const diferenciaMs = fechaFinMs - fechaInicioMs;
        // Generar un número aleatorio entre 0 y la diferencia en milisegundos
        const aleatorioMs = Math.random() * diferenciaMs;
        // Sumar el número aleatorio a la fecha de inicio para obtener la fecha aleatoria
        const fechaAleatoriaMs = fechaInicioMs + aleatorioMs;
        // Si se necesita el valor puro de la fecha en milisegundos, devolver el número aleatorio
        if (formato === 'ms') {
            return fechaAleatoriaMs;
        }
        // Crear un objeto Date a partir de la fecha aleatoria en milisegundos
        const fechaAleatoria = new Date(fechaAleatoriaMs);
        return fechaAleatoria;
    }
    formatearFecha(fecha) {
        const año = fecha.getFullYear().toString().slice(-2); // Obtiene los últimos 2 dígitos del año
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Suma 1 al mes porque los meses en JavaScript son de 0 a 11
        const dia = fecha.getDate().toString().padStart(2, '0');
        const horas = fecha.getHours().toString().padStart(2, '0');
        const minutos = fecha.getMinutes().toString().padStart(2, '0');
        const segundos = fecha.getSeconds().toString().padStart(2, '0');
        
        return `${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
    }
    tiempoASegundos(tiempo) {
        const [horas, minutos, segundos] = tiempo.split(":").map(Number);
        return horas * 3600 + minutos * 60 + segundos;
    }
    segundosATiempo(segundos) {
        const horas = Math.floor(segundos / 3600);
        const minutos = Math.floor((segundos % 3600) / 60);
        const seg = segundos % 60;
        return `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${seg.toString().padStart(2, "0")}`;
    }
    generarTiemposAleatorios(tiempoOriginal, iteraciones) {
        const totalSegundos = tiempoASegundos(tiempoOriginal);
        let tiemposAleatorios = [];
        let sumaSegundos = 0;
        //ciclo for que genera una cantidad aleatoria de segundos en base a la cantidad de iteraciones
        for (let i = 0; i < iteraciones - 1; i++) {
            let aleatorio = Math.floor(Math.random() * (totalSegundos - sumaSegundos));
            sumaSegundos += aleatorio;
            tiemposAleatorios.push(segundosATiempo(aleatorio));
        }

        tiemposAleatorios.push(segundosATiempo(totalSegundos - sumaSegundos));

        return tiemposAleatorios;
    }

}

const Fecha = new Fechas();

console.log(Fecha.generarFechaAleatoria(new Date(2023, 0, 1), new Date(2023, 11, 31), 'ms'))
// let dates = new Fechas();
// let fechaRandom = dates.generarFechaAleatoria(new Date(2023, 0, 1), new Date(2023, 11, 31));
// fechaRandom = dates.formatearFecha(fechaRandom);
// console.log(fechaRandom);

export default Fecha;