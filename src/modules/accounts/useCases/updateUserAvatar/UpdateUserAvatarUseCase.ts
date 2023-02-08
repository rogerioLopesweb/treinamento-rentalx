import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
    avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}
    
    async execute({user_id, avatar_file}: IRequest): Promise<void> {
       
        const user = await this.usersRepository.findById(user_id);
        if(!user){
            throw new AppError("User not exists!");
        }

        user.avatar = avatar_file;
        await this.usersRepository.create(user);

    }
}


export { UpdateUserAvatarUseCase };