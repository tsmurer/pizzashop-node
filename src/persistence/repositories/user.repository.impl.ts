import { User } from "../../core/entities/user";
import { UserRepository } from "../../interface-adapters/repositories/user-repository";

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserRepositoryImpl implements UserRepository {

    async save(user: User) {
        const { getAddresses, getOrder, getCurrentAddress, ...userData } = user;
    
        // Encode arrays to strings
        const encodedAddresses = JSON.stringify(getAddresses);
        const encodedOrder = JSON.stringify(getOrder);
        const encodedCurrentAddress = JSON.stringify(getCurrentAddress);
    
        // Save user to the database
        return await prisma.user.create({
          data: {
            ...userData,
            addresses: encodedAddresses,
            order: encodedOrder,
            currentAddress: encodedCurrentAddress,
          },
        });
      }
    
    async getById(id: string): Promise<User> {
        // Retrieve user from the database
        const user = await prisma.user.findUnique({
            where: { id },
        });
    
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
    
        // Decode strings to arrays
        const decodedAddresses = JSON.parse(user.addresses);
        const decodedOrder = JSON.parse(user.order);
        const decodedCurrentAddress = JSON.parse(user.currentAddress);
    
        return {
            ...user,
            addresses: decodedAddresses,
            order: decodedOrder,
            currentAddress: decodedCurrentAddress,
        };
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