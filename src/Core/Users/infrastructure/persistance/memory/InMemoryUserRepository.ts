import { UserNotFoundError } from "@/Core/Users/domain/UserNotFoundError";
import { User } from "@/Core/Users/domain/model/User";
import { UserRepository } from "@/Core/Users/domain/repository/UserRepository";

const Users: User[] = [];

export class InMemoryUserRepository implements UserRepository {

    register(user: User): Promise<void> {
        Users.push(user);
        return Promise.resolve();
    }
    
    getOneByUsername(username: String): Promise<User> {

        const user = Users.find(user => user.username === username);
        if (!user) {
            throw new UserNotFoundError("User was not found with username: " + username)
        }
        return Promise.resolve(user);
    }

}