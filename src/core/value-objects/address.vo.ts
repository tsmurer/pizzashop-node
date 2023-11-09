export class Address {
    private street: string;
    private city: string;
    private state: string;
    private postalCode: string;
    private country: string;
  
    constructor(street: string, city: string, state: string, postalCode: string, country: string) {
      this.street = street;
      this.city = city;
      this.state = state;
      this.postalCode = postalCode;
      this.country = country;
    }

    getStreet(): string {
      return this.street;
    }
  
    getCity(): string {
      return this.city;
    }
  
    getState(): string {
      return this.state;
    }
  
    getPostalCode(): string {
      return this.postalCode;
    }
  
    getCountry(): string {
      return this.country;
    }
  }