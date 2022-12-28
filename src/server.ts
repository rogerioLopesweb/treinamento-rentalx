import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specifications.routes';
const app = express();
app.use(express.json()); // ativar o recebimento de json na api
app.use("/categories",categoriesRoutes);
app.use("/specifications",specificationsRoutes);



app.listen(3333, () => console.log("Server is running!"));