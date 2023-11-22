import { User } from "../../core/entities/user";
import { UserRepository } from "../../interface-adapters/repositories/user-repository";
import { PrismaClient } from "@prisma/client"

export class PrismaUserRepository implements UserRepository {
    constructor(private readonly prisma: PrismaClient) {}
    create(user: User): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }
    public async getById(id: string): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }
    update(user: User): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }
  
  }