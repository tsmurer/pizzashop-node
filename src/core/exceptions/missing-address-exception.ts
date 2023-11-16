import { DomainException } from "./domain-exception";

export class MissingAddressException extends DomainException {
    constructor() {
      super('User must have an address to place an order.');
      this.name = 'MissingAddressException';
    }
  }