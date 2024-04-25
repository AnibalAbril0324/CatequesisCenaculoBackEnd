import express, { Application } from 'express';
import routesPersonas from '../routes/persona.routes';

class Server{
    private app: Application;
    private port:string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '4000';
        this.middelwares();
        this.routes();  
    }

    listen(){
        this.app.listen(this.port,() => { 
            console.log('Aplicacion corriendo por el puerto', this.port);
        });
    }

    routes(){
        this.app.use('/api/personas',routesPersonas);
    }

    middelwares(){
        //convertir el body a objeto por lo que recibimos de tipo json
        this.app.use(express.json());
    }
}

export default Server;