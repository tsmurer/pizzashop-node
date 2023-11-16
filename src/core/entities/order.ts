import { Address } from "../value-objects/address.vo"
import { OrderItem } from "../value-objects/order-item.vo";
import { User } from "./user"

export class Order {
    private id: string;
    private user: User;
    private address?: Address;
    private orderItems: OrderItem[]

    constructor(id: string, user: User, orderItem: OrderItem, address?: Address) {
        this.id = id;
        this.user = user;
        this.orderItems = [orderItem]; 
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