import { Order } from "../../core/entities/order";
import { OrderRepository } from "../../interface-adapters/repositories/order-repository";

export class OrderRepositoryImpl implements OrderRepository {
    getById(id: string): Order {
        throw new Error("Method not implemented.");
    }
    create(order: Order): void {
        throw new Error("Method not implemented.");
    }
    update(order: Order): void {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }
}