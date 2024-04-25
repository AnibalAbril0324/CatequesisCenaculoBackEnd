import { Router } from "express";
import  { deletePersona, getPersona, getPersonas, postPersona, putPersona }from '../controllers/persona.controller';

const router = Router();

//rutas que debemos escribir en el postman
router.get('/',getPersonas);
//ruta con paso de parametro
router.get('/:id',getPersona);

//eliminar persona
router.delete('/:id',deletePersona);

router.post('/',postPersona);

router.put('/:id',putPersona);
export default router;      