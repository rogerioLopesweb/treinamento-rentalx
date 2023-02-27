import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryinMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryinMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryinMemory: UsersRepositoryinMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
    beforeAll(() =>{
        usersRepositoryinMemory = new UsersRepositoryinMemory();
        authenticateUserUseCase =  new AuthenticateUserUseCase(usersRepositoryinMemory);
        createUserUseCase =  new CreateUserUseCase(usersRepositoryinMemory);
    });
    
    it("shoold be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            name: "User Test", 
            email: "user@test.com", 
            password: "123456", 
            driver_license: "001231"
        };

        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        });

        expect(result).toHaveProperty("token");

    });

    it("shoold not be able to authenticate an nonexistent user", async () => {
        
        expect( async () => {
            const result = await authenticateUserUseCase.execute({
                email: "false@email.com",
                password: "1254"
            });
        }).rejects.toBeInstanceOf(AppError);

    });

    it("shoold not be able to authenticate with incorrect password", async () => {
        
        expect( async () => {
            const user: ICreateUserDTO = {
                name: "User Test Error", 
                email: "user@test.com", 
                password: "1234576", 
                driver_license: "009999"
            };
            await createUserUseCase.execute(user);

            await authenticateUserUseCase.execute({
                email: user.email,
                password: "incorrectPassord"
            });

        }).rejects.toBeInstanceOf(AppError);

    });



})