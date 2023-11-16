class Cliente{
    constructor(dni, nombreCompleto, nroCelular){
        this.dni = dni;
        this.nombreCompleto = nombreCompleto;
        this.nroCelular = nroCelular;
    }
    getNombre(){
        return this.nombreCompleto;
    }
}

{/*
const cliente_1 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "Juan Pérez", (Math.floor(Math.random() * 8999999) + 1000000).toString());

const cliente_2 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "María Gómez", (Math.floor(Math.random() * 8999999) + 1000000).toString());

const cliente_3 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "Carlos Rodríguez", (Math.floor(Math.random() * 8999999) + 1000000).toString());

const cliente_4 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "Ana López", (Math.floor(Math.random() * 8999999) + 1000000).toString());

const cliente_5 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "Pedro García", (Math.floor(Math.random() * 8999999) + 1000000).toString());

const cliente_6 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "Laura Torres", (Math.floor(Math.random() * 8999999) + 1000000).toString());

const cliente_7 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "Luis Ramírez", (Math.floor(Math.random() * 8999999) + 1000000).toString());

const cliente_8 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "Marta Silva", (Math.floor(Math.random() * 8999999) + 1000000).toString());

const cliente_9 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "Osvaldo Armiento", (Math.floor(Math.random() * 8999999) + 1000000).toString());

const cliente_10 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "Alejandro Fernandez", (Math.floor(Math.random() * 8999999) + 1000000).toString());

const cliente_11 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "Mariana Peralta", (Math.floor(Math.random() * 8999999) + 1000000).toString());

//array de clientes
const array_clientes = [cliente_1, cliente_2, cliente_3, cliente_4, cliente_5, cliente_6, cliente_7, cliente_8, cliente_9, cliente_10, cliente_11];
*/}


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
    console.log(cliente)
    return cliente;
}
  
crearCliente()

export default array_clientes;   // Exporto las clases y los objetos para poder usarlos en otros archivos