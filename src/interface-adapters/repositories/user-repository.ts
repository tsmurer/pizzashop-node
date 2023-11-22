import { User } from "../../core/entities/user";

export interface UserRepository {
    getById(id: string): Promise<User | undefined>;
    create(user: User):Promise<User | undefined>;
    update(user: User):Promise<User | undefined>;
    delete():void;
}