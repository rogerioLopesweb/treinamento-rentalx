import "reflect-metadata";//TypeORM / tsyringe// dependencia 
import express, { NextFunction, Response, Request} from 'express';
import "express-async-errors";
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';
import { router } from './routes';

import "./shared/container";
import  { createConnection  } from "./database/data-source";
import { AppError } from "./errors/AppError";

createConnection();
const app = express();
app.use(express.json()); // ativar o recebimento de json na api

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router); // add as rotas

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if(err instanceof AppError){
            return response.status(err.statusCode).json({
                message: err.message
            });
        }

        return response.status(500).json({
            status: "erros",
            message:  `Internal server error - ${err.message}`, 
         }); 
    } 
   
);




app.listen(3333, () => console.log("Server is running!"));