import { Order } from "../../core/entities/order";

export interface OrderRepository {
    getById(id: string): Promise<Order | undefined>;
    create(order: Order):Promise<Order | undefined>;
    update(order: Order):Promise<Order | undefined>;
    delete():void;
}