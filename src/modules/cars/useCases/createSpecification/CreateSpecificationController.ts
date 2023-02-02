import { Response, Request } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationsUseCase";

class CreateSpecificationController {

    constructor (private createSpecificationUseCase: CreateSpecificationUseCase ){}
  
    async handle(request: Request, response: Response) : Promise<Response> {
        const { name, description } =  request.body;
        await this.createSpecificationUseCase.execute({name, description});
        return response.status(201).send();
   }
}


export { CreateSpecificationController }