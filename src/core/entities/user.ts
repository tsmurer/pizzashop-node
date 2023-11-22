import { Address } from "../value-objects/address.vo";
import { Email } from "./email";
import { Name } from "./name";
import { Order } from "./order"

export class User {
    public readonly id: string;
    public readonly name: Name;
    public readonly email: Email;
    public readonly addresses: Address[];
    public readonly currentAddress?: Address;
    public readonly password: string;
    public readonly order?: Order;
  
    constructor(id: string, name:Name, email: Email, password: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password; // Password should be securely hashed and salted in a real application.
      this.addresses = [];
      this.order = undefined;
      this.currentAddress = undefined;
    }
  
    getId(): string {
      return this.id;
    }
  
    getEmail(): String {
      return this.email.getAddress();
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