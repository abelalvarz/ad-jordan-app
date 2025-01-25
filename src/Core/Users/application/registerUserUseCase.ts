import { User } from "@/Core/Users/domain/model/User";
import { UserRepository } from "@/Core/Users/domain/repository/UserRepository";

export class RegisterUserUseCase {
    constructor(private readonly repository: UserRepository) { }

    execute(user: User): Promise<void> {
        return this.repository.register(user)
    }
}