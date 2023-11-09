import { User } from "../../core/entities/user";

export interface UserRepository {
    getById(id: string): User;
    create(user: User):void;
    update(user: User):void;
    delete():void;
}