import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from  "../ISpecificationsRepository";
import { Repository, In } from "typeorm";
import { AppDataSource } from "../../../../database/data-source";



class SpecificationsRepository implements ISpecificationsRepository {
  
    private repository: Repository<Specification>;

    constructor() {
        this.repository = AppDataSource.getRepository(Specification);
    }
        

    async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = this.repository.create({
            name,
            description
        });
        await this.repository.save(specification);
        return specification;
    }

    async list(): Promise<Specification[]> {
        const specifications = await this.repository.find();
        return specifications;
    }
    
    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({ where: { name } });
        return specification;
    }
    
    async findByIds(ids: string[]): Promise<Specification[]> {
        const specifications = await this.repository.findBy({ id: In(ids) });
        return specifications;
    }
}

export { SpecificationsRepository }
