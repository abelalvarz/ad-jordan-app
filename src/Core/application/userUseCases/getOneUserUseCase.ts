import { User } from "@/Core/domain/model/User";
import { UserRepository } from "@/Core/domain/repository/UserRepository";

export class GetOneUserUseCase {
    constructor(private readonly repository: UserRepository) { }

    execute(username: string): Promise<User> {
        return this.repository.getOneByUsername(username);
    }
}