class Fechas {
    constructor() {

    }
    crearObjetoFecha(milisegundos) {
        // Crear un objeto Date a partir de la fecha aleatoria en milisegundos
        const fechaAleatoria = new Date(milisegundos);
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
        const totalSegundos = Fecha.tiempoASegundos(tiempoOriginal);
        let tiemposAleatorios = [];
        let sumaSegundos = 0;
        //ciclo for que genera una cantidad aleatoria de segundos en base a la cantidad de iteraciones
        for (let i = 0; i < iteraciones - 1; i++) {
            if (i === 0){
                //genero un numero aleatorio entre 0 y el total de segundos dividido la mitad
                let aleatorio = Math.floor(Math.random() * (totalSegundos / 2));
                sumaSegundos += aleatorio;
            tiemposAleatorios.push(Fecha.segundosATiempo(aleatorio));
            } else {
                let aleatorio = Math.floor(Math.random() * (totalSegundos - sumaSegundos));
                sumaSegundos += aleatorio;
                tiemposAleatorios.push(Fecha.segundosATiempo(aleatorio));
            }
        }

        tiemposAleatorios.push(Fecha.segundosATiempo(totalSegundos - sumaSegundos));

        return tiemposAleatorios;
    }
    generarFechaEnBaseaDuracion(fecha, duracion) {
        let fechaMs = fecha;
        if (fechaMs instanceof Date === true) {
            // Convertir la fecha a milisegundos
            fechaMs = fecha.getTime();
        }
    
        // Convertir la duración a segundos
        const duracionSegundos = Fecha.tiempoASegundos(duracion);
    
        // Sumar la fecha en milisegundos con la duración en segundos
        const fechaSumadaMs = fechaMs + duracionSegundos * 1000;
    
        // Devolver la fecha sumada
        return fechaSumadaMs;
    }
    generarDuracion(horaInicio, horaFin) {
        // Calcular la diferencia en segundos entre las dos horas
        const diferenciaSegundos = horaFin * 60 - horaInicio * 60;
    
        // Generar un número aleatorio entre 0 y la diferencia en segundos
        const aleatorioSegundos = Math.ceil(Math.random() * diferenciaSegundos);
    
        // Devolver la duración en formato de tiempo
        return Fecha.segundosATiempo(aleatorioSegundos);
    
    }
    formatearDate(fecha) {
        console.log("fecha recibida: " + fecha)
        const dateObj = new Date(fecha);
        console.log("fecha creada: " + dateObj)
    
        const año = dateObj.getFullYear() % 100; // Obtener los últimos dos dígitos del año
        const mes = ('0' + (dateObj.getMonth() + 1)).slice(-2); // Agregar cero al mes si es necesario
        const dia = ('0' + dateObj.getDate()).slice(-2); // Agregar cero al día si es necesario

        return `${año}-${mes}-${dia} 00:00:00`;
  };
    
}

const Fecha = new Fechas();

{/*
let fechaRnd = Fecha.generarFechaAleatoria(new Date(2023, 0, 1), new Date(2023, 11, 31), "ms")
console.log(fechaRnd);
// fechaRnd = Math.floor(fechaRnd);
fechaRnd = new Date(fechaRnd);
console.log(fechaRnd)
// console.log(Math.floor(fechaRnd));
console.log(Fecha.formatearFecha(new Date(fechaRnd)));
// console.log(new Date(fechaRnd));
let fechaMasDuracion = Fecha.generarFechaEnBaseaDuracion(fechaRnd, "01:10:00");
// console.log(fechaMasDuracion);
console.log(Fecha.formatearFecha(new Date(fechaMasDuracion)));

let intervalos = Fecha.generarTiemposAleatorios("01:00:00", 3);
console.log(intervalos)
*/}

// let fechaRnd = Fecha.generarFechaAleatoria(new Date(2023, 0, 1), new Date(2023, 11, 31), "ms")
// console.log(Fecha.formatearFecha(new Date(fechaRnd)));
// let fechaMasDuracion = Fecha.generarFechaEnBaseaDuracion(fechaRnd, "01:10:00");
// // console.log(fechaMasDuracion);
// console.log(Fecha.formatearFecha(new Date(fechaMasDuracion)));

// let polenta = Fecha.generarDuracion(5, 60)
// console.log(typeof polenta)

export default Fecha;