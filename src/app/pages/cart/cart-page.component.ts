import {Component, OnInit} from '@angular/core';
import { Product } from "../../interfaces/product";
import {products} from '../../fixtures/products';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  products: Product[] = [];
  totalPrice!: number;

  constructor() {}

  removeProduct(id: string): void {
    this.products = this.products.filter((product: Product) => {
      return product.id !== id;
    });
  }

  ngOnInit(): void {
    this.products = products;

    this.totalPrice = products.reduce((accum, item) => {
      return accum += item.price;
    }, 0);
  }
}
