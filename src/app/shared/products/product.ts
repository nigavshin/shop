import { IProductImage } from './product-image'

export interface IProduct {
    _id: string,
    name: string,
    price: number,
    images: IProductImage[],
    subcategory: string,
    feedbacksCount: string,
    raiting: number;
}
