"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPersona = exports.postPersona = exports.deletePersona = exports.getPersona = exports.getPersonas = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getPersonas = (req, res) => {
    connection_1.default.query('select * from persona', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
    /*res.json({
        msg: "getPersonas"
    })*/
};
exports.getPersonas = getPersonas;
const getPersona = (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    connection_1.default.query('select * from persona where id=?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
        //console.log(data[0])
    });
};
exports.getPersona = getPersona;
const deletePersona = (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    connection_1.default.query('delete from persona where id=?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Persona eliminada con exito'
        });
    });
};
exports.deletePersona = deletePersona;
const postPersona = (req, res) => {
    // console.log(req.body)
    const { body } = req;
    connection_1.default.query('insert into persona set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Persona agregada con exito'
        });
    });
};
exports.postPersona = postPersona;
const putPersona = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('update persona set? where id =?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'persona actualizada con exito'
        });
    });
};
exports.putPersona = putPersona;
