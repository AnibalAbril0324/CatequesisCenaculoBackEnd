import { Request, Response, request } from 'express';

export const getPersonas = (req: Request , res: Response) => {
    res.json({
        msg: "getPersonas"
    })
}

export const getPersona = (req: Request , res: Response) => {
   // console.log(req.params);
    const { id } = req.params;
    res.json({
        msg: "Obteniedo Persona",
        id: id
    })
}

export const deletePersona = (req: Request , res: Response) => {
    // console.log(req.params);
    const { id } = req.params;
    res.json({
        msg: "Delete Persona",
        id: id
    })
}

export const postPersona = (req: Request , res: Response) => {
    console.log(req.body)
    const { body } = req;
    res.json({
        msg: "post Persona",
        body: body
    })
}

export const putPersona = (req: Request , res: Response) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "put Persona",
        body: body, 
        id: id
    })
}