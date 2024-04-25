"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const persona_controller_1 = require("../controllers/persona.controller");
const router = (0, express_1.Router)();
//rutas que debemos escribir en el postman
router.get('/', persona_controller_1.getPersonas);
//ruta con paso de parametro
router.get('/:id', persona_controller_1.getPersona);
//eliminar persona
router.delete('/:id', persona_controller_1.deletePersona);
router.post('/', persona_controller_1.postPersona);
router.put('/:id', persona_controller_1.putPersona);
exports.default = router;
