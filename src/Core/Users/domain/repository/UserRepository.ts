import { User } from "../model/User";

export interface UserRepository {
    register(user: User): Promise<void>;
    getOneByUsername(username:String): Promise<User>;
}