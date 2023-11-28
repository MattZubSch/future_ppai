class Cliente{
    constructor(id, dni, nombreCompleto, nroCelular){
        this.id = id;
        this.dni = dni;
        this.nombreCompleto = nombreCompleto;
        this.nroCelular = nroCelular;
    }
    getNombre(){
        return this.nombreCompleto;
    }
}

//inicializo un array para cargar clientes
const array_clientes = [];

//creo una función para crear clientes
export function crearCliente() {
    //defino una lista de nombres para crear los clientes
    const nombres = ["Juan", "María", "Pedro", "Luisa", "Carlos", "Ana", "José", "Laura", "Miguel", "Carmen", "Antonio", "Isabel", "Francisco", "Elena", "Javier", "Sofía", "Ricardo", "Patricia", "Alberto", "Natalia", "Manuel", "Raquel", "David", "Lourdes", "Pablo", "Silvia", "Alejandro", "Lucía", "Fernando", "Eva"];
    //defino una lista de apellidos para crear los clientes
    const apellidos = ["González", "Rodríguez", "Pérez", "Fernández", "López", "García", "Martínez", "Sánchez", "Torres", "Ramírez", "Díaz", "Ruiz", "Vargas", "Jiménez", "Ortega", "Moreno", "Hernández", "Soto", "Castro", "Cruz", "Mendoza", "Silva", "Gómez", "Rojas", "Alvarez", "Medina", "Flores", "Vega", "Delgado", "Valencia"]
    //genero un dni aleatorio
    let dni = Math.floor(Math.random() * 50000000).toString();
    //genero un nombre aleatorio
    let nombre = nombres[Math.floor(Math.random() * nombres.length)];
    //genero un apellido aleatorio
    let apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
    //genero un nombre completo
    let nombreCompleto = nombre + " " + apellido;
    //genero un número de celular aleatorio
    let nroCelular = (Math.floor(Math.random() * 8999999) + 1000000).toString();
    //creo un objeto cliente con los parámetros generados
    let cliente = new Cliente(dni, nombreCompleto, nroCelular);
    //retorno el cliente creado
    return cliente;
}

// Exporto las clases y los objetos para poder usarlos en otros archivos
export default Cliente;