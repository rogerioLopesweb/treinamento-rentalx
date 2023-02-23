import { Repository } from "typeorm";
import { AppDataSource } from "@database/data-source";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
      this.repository = AppDataSource.getRepository(User);
    }
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({ where: { id } });
        return user;
    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ where: { email } });
        return user;
    }
    async create(data: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name : data.name,
            email: data.email,
            driver_license: data.driver_license,
            password: data.password,
            avatar: data.avatar,
            id: data.id
        });

        await this.repository.save(user);
     
    }

}


export { UsersRepository }