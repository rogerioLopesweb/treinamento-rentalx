import { request, response, Router } from "express";
import multer from "multer"; 


import {createCategoryController } from '../modules/cars/useCases/createCategory/index';
import { listCategoriesController } from '../modules/cars/useCases/listCategories/index';
import { importCategoryController } from '../modules/cars/useCases/importCategory/index';
const categoriesRoutes =  Router();

const upload = multer({
    dest: ".tmp",
});

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});
categoriesRoutes.get("/", (request, response) => {
    const all = listCategoriesController.handle(request, response);
    return response.status(201).json(all);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
 return importCategoryController.handle(request, response);
});

export { categoriesRoutes };

