import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";

import { Product } from "@interfaces/product";
import {AppState} from "../../reducers";
import {cartSelector, removeFromCart} from "../../reducers/cart";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  totalPrice!: number;

  constructor(
    private store: Store<AppState>
  ) {
    store
      .select(cartSelector)
        .pipe(takeUntil(this.destroy$))
        .subscribe(products => {
          this.products = products;

          this.totalPrice = products.reduce((accum, item: Product) => {
            return accum += item.price;
          }, 0);
        }
      )
  }

  removeProduct(id: string): void {
    this.store.dispatch(removeFromCart({id}));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  ngOnInit(): void {}
}
