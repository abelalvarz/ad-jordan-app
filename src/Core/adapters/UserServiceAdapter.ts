import { GetOneUserUseCase } from "../Users/application/getOneUserUseCase";
import { RegisterUserUseCase } from "../Users/application/registerUserUseCase";
import { InMemoryUserRepository } from "../Users/infrastructure/persistance/memory/InMemoryUserRepository"

const repository = new InMemoryUserRepository();

export const UserServiceProvider = {
    register: new RegisterUserUseCase(repository),
    getOneByUsername: new GetOneUserUseCase(repository)
}