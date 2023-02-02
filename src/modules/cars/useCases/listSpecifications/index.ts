import { ListSpecificationsController  } from "./listSpecificationController";
import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

export default ():ListSpecificationsController =>{
    const specificationsRepositoryRepository = new SpecificationsRepository();
    const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationsRepositoryRepository);
    const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase);
    
    return listSpecificationsController;
}

