import { LineItemDTO } from "./line-item.dto";

export interface OrderDTO {
    id: number;
    lineItems: LineItemDTO[];
    total: number;
}