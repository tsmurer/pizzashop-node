import { Order } from "../../core/entities/order";

export interface OrderRepository {
    getById(id: string): Order;
    create(order: Order):void;
    update(order: Order):void;
    delete():void;
}