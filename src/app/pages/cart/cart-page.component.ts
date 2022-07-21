import {Component, OnInit} from '@angular/core';
import { Product } from "../../interfaces/product";
import {Store} from "@ngrx/store";
import {AppState} from "../../reducers";
import {cartSelector, removeFromCart} from "../../reducers/cart";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  products: Product[] = [];
  totalPrice!: number;

  constructor(private store: Store<AppState>) {
    store.select(cartSelector).subscribe(products => {
      this.products = products;

      this.totalPrice = products.reduce((accum, item: Product) => {
        return accum += item.price;
      }, 0);
    })
  }

  removeProduct(id: string): void {
    this.store.dispatch(removeFromCart({id}));
  }

  ngOnInit(): void {}
}
