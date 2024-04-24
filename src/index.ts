/*const nombre: string = 'Estefania';

const apellido: string ='Guallpa';

console.log('Nombre', nombre);
console.log('Apellido', apellido);

const  nombrecompleto = (nombre: string, apellido: string ) => {
    return `${nombre} ${apellido}`;
}

console.log(nombrecompleto(nombre,apellido))*/

import Server from "./models/server";
import dotenv from 'dotenv'

//configuramos dot.env
dotenv.config();

const server = new Server();

server.listen();