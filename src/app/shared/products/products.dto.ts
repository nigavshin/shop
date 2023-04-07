import { IProduct } from "./product"

export interface IProductDto {
    data: {
        items: IProduct[]
    }
}