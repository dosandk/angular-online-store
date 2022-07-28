export interface Product {
  id: string;
  title: string;
  // put optional parameters at the bottom of interface
  count?: number;
  price: number;
  // if the property could be nullable value it's better to make it optional or use Omit utility in the appropriate place
  // https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
  rating: number | null;
  description: string;
  brand: string;
  images: Array<{ url: string, source: string }>;
  discount: number;
  status: number;
  // try to omit 'any' type; it's a bad practice;
  subcategory: any;
  characteristics: any;
  quantity: number
  [key: string]: any;
}
