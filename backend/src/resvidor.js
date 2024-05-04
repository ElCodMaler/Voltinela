import express from 'express'
import morgan from 'morgan'
import lenguageRoutes from './routes/lenguage.routes'

//inicializamos el servidor con express
const servidor = express();

// settings
servidor.set('port', 4000);

// Middlewares
servidor.use(morgan("dev"));

//Routes
servidor.use(lenguageRoutes);

export default servidor;