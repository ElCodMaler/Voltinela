import { getConnection } from '../database/dataBase'

const getValues = async (req, res) => {
    try {
        const conexion = await getConnection();
        const resultado = await conexion.query("SELECT id, nombre, correo, telefono, ubicacion FROM users");
        console.log(resultado);
        res.json(resultado);
    } catch(err) {
        res.status(500);
        res.send(err.message);
    }
};

const addValues = async (req, res) => {
    try {
        const { nombre, correo, telefono, ubicacion} = req.body;

        if( nombre === undefined || correo === undefined || telefono === undefined || ubicacion === undefined){
            res.status(400).json({message: "bad Request, hay que llenar todos los campos"});
        }

        const user = { nombre, correo, telefono, ubicacion};
        const conexion = await getConnection();
        await conexion.query("INSERT INTO users SET ?",user);

        res.json(result);
    } catch(err) {
        res.status(500);
        res.send(err.message);
    }
};

const updateValues = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, correo, telefono, ubicacion} = req.body;

        if( nombre === undefined || correo === undefined || telefono === undefined || ubicacion === undefined){
            res.status(400).json({message: "bad Request, hay que llenar todos los campos"});
        }

        const user = { nombre, correo, telefono, ubicacion};
        const conexion = await getConnection();
        const result = await conexion.query("UPDATE users SET ? WHERE id = ?",[user,id]);

        res.json(result);
    } catch(err) {
        res.status(500);
        res.send(err.message);
    }
};

const deleteValues = async (req, res) => {
    try {
        const { id } = req.params;

        const conexion = await getConnection();
        const result = await conexion.query("DELETE FROM users WHERE id = ?",id);

        res.json({message: "el campo de id ("+id+") se elimino"});
    } catch(err) {
        res.status(500);
        res.send(err.message);
    }
};

export const methods = {
    getValues,
    addValues,
    updateValues,
    deleteValues
};