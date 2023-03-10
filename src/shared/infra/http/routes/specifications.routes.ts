import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "@modules/cars/useCases/listSpecifications/ListSpecificationController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const specificationsRoutes =  Router();
specificationsRoutes.use(ensureAuthenticated);

const createSpecificationController  = new CreateSpecificationController();
const listSpecificationsController = new  ListSpecificationsController();

specificationsRoutes.post("/",  createSpecificationController.handle);

specificationsRoutes.get("/", listSpecificationsController.handle);

export { specificationsRoutes };

