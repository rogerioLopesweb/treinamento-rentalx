import { ListSpecificationsController  } from "./listSpecificationController";
import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

const specificationsRepositoryRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationsRepositoryRepository);
const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase);

export { listSpecificationsController }