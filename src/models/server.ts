import express, { Application } from 'express';
import routesPersonas from '../routes/persona.routes';
import connection from '../db/connection';
import cors from 'cors'

class Server{
    private app: Application;
    private port:string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '4000';
        this.middelwares();
        this.routes(); 
        this.conectarDB(); 
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

        //cors
        this.app.use(cors());
    }

    conectarDB(){
        connection.connect((err) =>{
            if(err) throw err;
            console.log('conectado a la base de datos');
        })
    }
}

export default Server;