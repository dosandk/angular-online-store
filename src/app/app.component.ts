// it's a good practice to divide imports by categories:
// 1st - third party libraries,
// 2nd - @angular entities,
// 3rd - the rest from inner application
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { Component } from '@angular/core';

import { AppState } from "./reducers";
import { cartSelector } from "./reducers/cart";
import { wishlistSelector } from "./reducers/wish-list";
import { Product } from "@interfaces/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // please always specify a type of variable (public readonly in case with title)
  public readonly title = 'angular-online-store';

  // we can directly assign observable values here during initialization
  public cartProducts$: Observable<Product[]> = this.store.select(cartSelector);
  public wishlistsProducts$: Observable<Product[]> = this.store.select(wishlistSelector);

  constructor(
    private store: Store<AppState>
  ) {}
}
