"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPersona = exports.postPersona = exports.deletePersona = exports.getPersona = exports.getPersonas = void 0;
const getPersonas = (req, res) => {
    res.json({
        msg: "getPersonas"
    });
};
exports.getPersonas = getPersonas;
const getPersona = (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    res.json({
        msg: "Obteniedo Persona",
        id: id
    });
};
exports.getPersona = getPersona;
const deletePersona = (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    res.json({
        msg: "Delete Persona",
        id: id
    });
};
exports.deletePersona = deletePersona;
const postPersona = (req, res) => {
    console.log(req.body);
    const { body } = req;
    res.json({
        msg: "post Persona",
        body: body
    });
};
exports.postPersona = postPersona;
const putPersona = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "put Persona",
        body: body,
        id: id
    });
};
exports.putPersona = putPersona;
