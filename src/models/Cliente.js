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

const cliente_1 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "Juan Pérez", (Math.floor(Math.random() * 8999999) + 1000000).toString());

const cliente_2 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "María Gómez", (Math.floor(Math.random() * 8999999) + 1000000).toString());

const cliente_3 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "Carlos Rodríguez", (Math.floor(Math.random() * 8999999) + 1000000).toString());

const cliente_4 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "Ana López", (Math.floor(Math.random() * 8999999) + 1000000).toString());

const cliente_5 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "Pedro García", (Math.floor(Math.random() * 8999999) + 1000000).toString());

const cliente_6 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "Laura Torres", (Math.floor(Math.random() * 8999999) + 1000000).toString());

const cliente_7 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "Luis Ramírez", (Math.floor(Math.random() * 8999999) + 1000000).toString());

const cliente_8 = new Cliente(Math.floor(Math.random() * 50000000).toString(), "Marta Silva", (Math.floor(Math.random() * 8999999) + 1000000).toString());

//array de clientes
const array_clientes = [cliente_1, cliente_2, cliente_3, cliente_4, cliente_5, cliente_6, cliente_7, cliente_8];

export default array_clientes;   // Exporto las clases y los objetos para poder usarlos en otros archivos