import express from 'express';
import { router } from './routes';


const app = express();
app.use(express.json()); // ativar o recebimento de json na api
app.use(router); // add as rotas


app.listen(3333, () => console.log("Server is running!"));