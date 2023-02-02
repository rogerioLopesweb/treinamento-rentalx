import { request, response, Router } from "express";
import multer from "multer"; 


import  createCategoryController  from '../modules/cars/useCases/createCategory/index';
import  listCategoriesController  from '../modules/cars/useCases/listCategories/index';
import  importCategoryController  from '../modules/cars/useCases/importCategory/index';

const categoriesRoutes =  Router();

//Configurando a pasta que será realizado o uploado do arquivo
const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/",  async(request, response) => {
    return await createCategoryController().handle(request, response);
});
 categoriesRoutes.get("/", async (request, response) => {
    return await listCategoriesController().handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"),  async (request, response) => {
 return await importCategoryController().handle(request, response);
});

export { categoriesRoutes };

