import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from "./reducers";
import {cartSelector} from "./reducers/cart";
import {wishlistSelector} from "./reducers/wish-list";
import {Product} from "@interfaces/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly title = 'angular-online-store';

  public cartProducts$: Observable<Product[]> = this.store.select(cartSelector);
  public wishlistsProducts$: Observable<Product[]> = this.store.select(wishlistSelector);

  constructor(
    private store: Store<AppState>
  ) {}
}
