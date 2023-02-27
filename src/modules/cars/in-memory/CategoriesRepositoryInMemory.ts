
import { Category } from "../infra/typeorm/entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../repositories/ICategoriesRepository";


class CategoriesRepositoryInMemory implements ICategoriesRepository {
    caterories: Category[] = [];
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
       const category =  new Category()
       Object.assign(category, {name,description});
       this.caterories.push(category);
    }   
    async list(): Promise<Category[]> {
       const categories = this.caterories;
       return categories
    }

    async findByName(name: string): Promise<Category> {
        const category =  this.caterories.find((category)=> category.name === name); 
       return category;
    }

}

export { CategoriesRepositoryInMemory }