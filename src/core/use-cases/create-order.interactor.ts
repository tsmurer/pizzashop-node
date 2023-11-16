import { ItemRepositoryImpl } from "../../persistence/repositories/item.repository.impl";
import { OrderRepositoryImpl } from "../../persistence/repositories/order.repository.impl";
import { UserRepositoryImpl } from "../../persistence/repositories/user.repository.impl";
import { Item } from "../entities/item";
import { OrderItem } from "../value-objects/order-item.vo";

export class CreateOrderUseCase {
    constructor(
        private orderRepository: OrderRepositoryImpl,
        private userRepository: UserRepositoryImpl,
        private itemRepository: ItemRepositoryImpl
      ) {}


      execute(userId: string, item: Item, quantity: number) {
        //todo: write business logic to create an order, write tests for it
        // const user = this.userRepository.getById(userId);
        // let orderItem = new OrderItem(item, quantity);
        // let order = new Order()

      }

}