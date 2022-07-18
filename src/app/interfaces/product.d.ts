export interface Product {
  id: string;
  title: string;
  count?: number;
  price: number;
  images: Array<{ url: string, source: string }>;
  [key: string]: any;
}
