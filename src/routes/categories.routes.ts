import { Router } from "express";
import {createCategoryController } from '../modules/cars/useCases/createCategory/index';
import { listCategoriesController } from '../modules/cars/useCases/listCategories/index';
const categoriesRoutes =  Router();


categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});
categoriesRoutes.get("/", (request, response) => {
    const all = listCategoriesController.handle(request, response);
    return response.status(201).json(all);
});

export { categoriesRoutes };

