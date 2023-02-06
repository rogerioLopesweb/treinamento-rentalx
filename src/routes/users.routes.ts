import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();


const createuserController = new CreateUserController();

usersRoutes.post("/", createuserController.handle);


export { usersRoutes }