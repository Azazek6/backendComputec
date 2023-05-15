// Lineas que establecen las configuraciones principales para poder correr la API
import express from 'express';
import cors from "cors";
import { PORT } from "./config/configuration.js";
import routes from "./routes/index.js";

const app = express();

//Configuraciones principales
app.set('PORT',PORT);
app.use(express.json());
app.use(cors());

//Uso de rutas
app.use(routes);

export default app;