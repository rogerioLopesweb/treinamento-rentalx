import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';
import { router } from './routes';

import  "./database/data-source";

const app = express();
app.use(express.json()); // ativar o recebimento de json na api

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router); // add as rotas




app.listen(3333, () => console.log("Server is running!"));