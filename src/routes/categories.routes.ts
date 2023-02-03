import { request, response, Router } from "express";
import multer from "multer"; 


import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ListCategoriesController}  from '../modules/cars/useCases/listCategories/ListCategoriesController';
import { ImportCategoryController }  from '../modules/cars/useCases/importCategory/importCategoryController';

const categoriesRoutes =  Router();

//Configurando a pasta que será realizado o uploado do arquivo
const upload = multer({
    dest: "./tmp",
});

const createCategoryController  = new CreateCategoryController();
const listCategoriesController  = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();


categoriesRoutes.post("/",  createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post("/import", upload.single("file"),  importCategoryController.handle);

export { categoriesRoutes };

