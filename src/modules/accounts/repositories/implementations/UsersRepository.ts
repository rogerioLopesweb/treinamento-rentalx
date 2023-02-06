import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database/data-source";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
      this.repository = AppDataSource.getRepository(User);
    }
   async create(data: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name : data.name,
            username : data.username,
            email: data.email,
            driver_license: data.driver_license,
            password: data.password

        });

        await this.repository.save(user);
     
    }

}


export { UsersRepository }