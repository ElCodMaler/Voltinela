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

export const methods = {
    getValues
};