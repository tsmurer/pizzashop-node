import { User } from "../../core/entities/user";
import { UserRepository } from "../../interface-adapters/repositories/user-repository";

export class UserRepositoryImpl implements UserRepository {
    
    getById(id: string): User {
        throw new Error("Method not implemented.");
    }
    create(user: User): void {
        throw new Error("Method not implemented.");
    }
    update(user: User): void {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }

}