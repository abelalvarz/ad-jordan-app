import { GetOneUserUseCase } from "../application/userUseCases/getOneUserUseCase";
import { RegisterUserUseCase } from "../application/userUseCases/registerUserUseCase";
import { InMemoryUserRepository } from "../infrastructure/persistance/InMemoryUserRepository"

const repository = new InMemoryUserRepository();

export const UserServiceProvider = {
    register: new RegisterUserUseCase(repository),
    getOneByUsername: new GetOneUserUseCase(repository)
}