"use strict";
/*const nombre: string = 'Estefania';

const apellido: string ='Guallpa';

console.log('Nombre', nombre);
console.log('Apellido', apellido);

const  nombrecompleto = (nombre: string, apellido: string ) => {
    return `${nombre} ${apellido}`;
}

console.log(nombrecompleto(nombre,apellido))*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./models/server"));
const dotenv_1 = __importDefault(require("dotenv"));
//configuramos dot.env
dotenv_1.default.config();
const server = new server_1.default();
server.listen();
