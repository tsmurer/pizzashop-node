import { Address } from "../value-objects/address.vo"
import { User } from "./user"

export class Order {
    private id: string;
    private user: User;
    private address?: Address;

    constructor(id: string, user: User, address?: Address) {
        this.id = id;
        this.user = user;
        if(!address) {
            throw new Error("you should register an address before ordering anything!");
        }
        this.address = address;
    }

     
    getId(): string {
        return this.id;
    }
    
    getUsername(): User {
        return this.user;
    }
    
    getAddress(): Address | undefined {
        return this.address;
    }
  
}