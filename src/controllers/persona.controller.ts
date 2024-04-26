import { Request, Response, request } from 'express';
import connection from '../db/connection';

export const getPersonas = (req: Request , res: Response) => {

        connection.query('select * from persona',(err,data) =>{
            if(err) throw err;
            res.json(data)
        })
    /*res.json({
        msg: "getPersonas"
    })*/    
}

export const getPersona = (req: Request , res: Response) => {
   // console.log(req.params);
    const { id } = req.params;
    connection.query('select * from persona where id=?',id,(err,data) =>{
        if(err) throw err;
        res.json(data[0])
        //console.log(data[0])
    })
}

export const deletePersona = (req: Request , res: Response) => {
    // console.log(req.params);
    const { id } = req.params;

    connection.query('delete from persona where id=?',id,(err,data) =>{
        if(err) throw err;
        res.json({
            msg: 'Persona eliminada con exito'
        })
    })
}

export const postPersona = (req: Request , res: Response) => {
   // console.log(req.body)
    const { body } = req;
    connection.query('insert into persona set ?',[body],(err,data) =>{
        if(err) throw err;
        res.json({
            msg: 'Persona agregada con exito'
        })
    })
}

export const putPersona = (req: Request , res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('update persona set? where id =?',[body,id], (err,data) => {
        if (err) throw err;
        
        res.json({
            msg: 'persona actualizada con exito'
        })
    })
}