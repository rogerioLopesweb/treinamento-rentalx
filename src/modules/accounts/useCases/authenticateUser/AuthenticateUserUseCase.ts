import { compare } from "bcryptjs";
import { AppError } from "@errors/AppError";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";



import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse{
    user: {
        name:string,
        email: string
    },
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ){}

    async execute({email, password} : IRequest): Promise<IResponse> {
       const user = await this.userRepository.findByEmail(email);
       if(!user){
         throw new AppError("Email or password incorrect!");
       }

       const passwordMatch = await compare(password, user.password);
       if(!passwordMatch){
        throw new AppError("Email or password incorrect!");
       }
       const token = sign({}, "ef0fd34af5eecb4319d40158db5b92b8", {
        subject: user.id,
        expiresIn : "1d"
       });

       const tokenReturn: IResponse = {
        user: {
            name: user.name,
            email: user.email
        },
        token
       }

       return tokenReturn;
   }
}


export { AuthenticateUserUseCase }