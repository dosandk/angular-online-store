import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

import { Component, OnDestroy } from '@angular/core';

import { Product } from '@interfaces/product';
import { AppState } from '../../reducers';
import { cartSelector, removeFromCart } from '../../reducers/cart';
import { CalculationHelperService } from '../../services/calculation-helper.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnDestroy {
  products: Product[] = [];
  totalPrice!: number;

  private readonly componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store<AppState>
  ) {
    // !IMPORTANT; always unsubscribe from Observables where it's needed. It leads to a memory leaks.
    // Consider the possible unsubscribe solution below:
    store.select(cartSelector)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(products => {
      this.products = products;

      // try to keep your components as much cleaner as possible; For example here we can move reduce logic in some
      // helper service and do calculations there. Please consider the solution below:
      this.totalPrice = CalculationHelperService.getProductTotalPrice(products);
    })
  }

  removeProduct(id: string): void {
    this.store.dispatch(removeFromCart({id}));
  }

  public ngOnDestroy(): void {
    this.componentDestroyed$.next();
  }
}
