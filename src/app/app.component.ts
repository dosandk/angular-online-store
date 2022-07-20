import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from "./reducers";
import {cartSelector} from "./reducers/cart";
import {wishlistSelector} from "./reducers/wish-list";
import {Product} from "./interfaces/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-online-store';

  cartProducts$: Observable<Product[]>;
  wishlistsProducts$: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.cartProducts$ = store.select(cartSelector);
    this.wishlistsProducts$ = store.select(wishlistSelector);
  }
}
