import { Router } from "express";
import createSpecificationController from '../modules/cars/useCases/createSpecification/index';
import listSpecificationsController from '../modules/cars/useCases/listSpecifications/index';

const specificationsRoutes =  Router();

specificationsRoutes.post("/",  async (request, response) => {
    return await createSpecificationController().handle(request, response);
});
specificationsRoutes.get("/",  async (request, response) => {
    return await listSpecificationsController().handle(request, response);
});

export { specificationsRoutes };

