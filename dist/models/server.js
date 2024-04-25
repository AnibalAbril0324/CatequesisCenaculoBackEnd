"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const persona_routes_1 = __importDefault(require("../routes/persona.routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4000';
        this.middelwares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo por el puerto', this.port);
        });
    }
    routes() {
        this.app.use('/api/personas', persona_routes_1.default);
    }
    middelwares() {
        //convertir el body a objeto por lo que recibimos de tipo json
        this.app.use(express_1.default.json());
    }
}
exports.default = Server;
