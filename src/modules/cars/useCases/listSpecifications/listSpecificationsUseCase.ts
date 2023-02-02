import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

class ListSpecificationsUseCase {
    constructor(private specificationsRepository : ISpecificationsRepository){}

   async execute(): Promise<Specification[]>
    {
        const specification = await this.specificationsRepository.list();
        return specification;
    }
}
export { ListSpecificationsUseCase }