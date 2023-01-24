import fs from 'fs';
import {parse as csvParse} from "csv-parse";

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
    name : string;
    description: string;
}
class ImportCategoryUseCase {
   
   constructor(private categoriesRespository: ICategoriesRepository) {}
   
   loadCategories(file: Express.Multer.File ) : Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {

            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];

            const parseFile = csvParse();
            stream.pipe(parseFile);

            parseFile.on("data", async (line) => {
                const [name, description] = line;
                categories.push({
                    name,
                    description
                });
            }).on("end", () => {
                fs.promises.unlink(file.path); // remove o arquivo depois que terma a leitura
                resolve(categories);
            }).on("error", (err) => {
                reject(err);
            })
        });
    }

    async execute(file: Express.Multer.File ): Promise<void> {
       const categories =  await this.loadCategories(file);
       //console.log(categories);
       categories.map( async (category) => {
            const { name, description } = category;
            const existCategory =  this.categoriesRespository.findByName(name);
            if(!existCategory){
              this.categoriesRespository.create({
                name,
                description
              });
            }
       });

    }
}

export { ImportCategoryUseCase }