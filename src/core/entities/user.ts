import { Address } from "../value-objects/address.vo";
import { Order } from "./order"

export class User {
    private id: string;
    private username: string;
    private email: string;
    private addresses: Address[];
    private currentAddress?: Address;
    private password: string;
    private order?: Order;
  
    constructor(id: string, username: string, email: string, password: string) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.password = password; // Password should be securely hashed and salted in a real application.
      this.addresses = [];
      this.order = undefined;
      this.currentAddress = undefined;
    }
  
    getId(): string {
      return this.id;
    }
  
    getUsername(): string {
      return this.username;
    }
  
    getEmail(): string {
      return this.email;
    }

    getOrder(): Order | undefined {
        return this.order;
    }

    getCurrentAddress(): Address | undefined {
        return this.currentAddress;
    }

    getAddresses(): Address[] {
        return this.addresses;
    }

    authenticate(inputPassword: string): boolean {
        // In a real application, you would compare the inputPassword with the hashed and salted password.
        return this.password === inputPassword; // This is a simplified check.
    }
}