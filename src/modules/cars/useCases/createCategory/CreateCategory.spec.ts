import { AppError } from "@errors/AppError";
import { CategoriesRepositoryInMemory } from "@modules/cars/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", ()=>{
    
    beforeEach(()=> {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
    });

    it("Should be able to create a new category ", async () => {

        const category = {
            name: "Category Teste",
            description: "Category description Test"
        }
       await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
       });

       const cateoryCreated = await categoriesRepositoryInMemory.findByName(category.name);
       console.log(cateoryCreated);
        expect(cateoryCreated).toHaveProperty("id");
    });


    it("Should not be able to create a new category with name exists", async () => {

       expect( async() => {

            const category = {
                name: "Category Teste",
                description: "Category description Test"
            }
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description
            });

            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description
            });
       }).rejects.toBeInstanceOf(AppError);
    });

   
})