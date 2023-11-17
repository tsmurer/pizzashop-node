import { UserRepositoryImpl } from "../../persistence/repositories/user.repository.impl";
import { User } from "../entities/user";

export class CreateUserInteractor {

    private userRepository: UserRepositoryImpl

    constructor(userRepository:UserRepositoryImpl) {
        this.userRepository = userRepository;
    }

    execute(user:User) {
        console.log("creating user")
        return this.userRepository.save(user)
    }
}