export interface Product {
  id: string;
  title: string;
  count?: number;
  price: number;
  rating?: number;
  description: string;
  brand: string;
  images: Array<{ url: string, source: string }>;
  discount: number;
  status: number
  subcategory: any;
  characteristics: any;
  quantity: number
  [key: string]: any;
}
