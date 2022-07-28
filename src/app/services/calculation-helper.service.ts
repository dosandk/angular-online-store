import { Product } from '@interfaces/product';

export class CalculationHelperService {
  public static getProductTotalPrice(products: Product[]): number {
    return products.reduce((accum, item: Product) => (accum += item.price), 0);
  }
}
