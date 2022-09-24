import {Component, OnInit, Input, OnDestroy} from '@angular/core';

import {Store} from "@ngrx/store";
import {Subject, takeUntil} from "rxjs";

import {addToCart, cartSelector, removeFromCart} from "../../reducers/cart";
import {addToWishList, removeFromWishList, wishlistSelector} from "../../reducers/wish-list";
import {AppState} from "../../reducers";
import {Product} from "@interfaces/product";
import { NotificationService } from 'src/app/services/notification.service';

type productsList = 'cart' | 'wishlist';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() product!: any;
  @Input() showFooter = true;

  cartProducts = [];
  wishlistProducts = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  isActive = (type: productsList) => {
    const lists = {
      cart: this.cartProducts,
      wishlist: this.wishlistProducts,
    };

    return lists[type].find((product: Product) => product.id === this.product.id);
  }

  constructor(
    private store: Store<AppState>,
    private notificationService: NotificationService
  ) {
    store.select(cartSelector)
      .pipe(takeUntil(this.destroy$))
      .subscribe(products => {
        this.cartProducts = products;
      });

    store.select(wishlistSelector)
      .pipe(takeUntil(this.destroy$))
      .subscribe(products => {
        this.wishlistProducts = products;
      });
  }

  showNotification (title: string, action: string) {
    const message = `Product "${title}" was successfully ${action}`;

    this.notificationService.show(message);
  }

  addToCart (product: Product) {
    if (this.isActive('cart')) {
      this.store.dispatch(removeFromCart({ id: product.id }));
      this.showNotification(product.title, 'removed from cart');
    } else {
      this.store.dispatch(addToCart({product}));
      this.showNotification(product.title, 'added to cart');
    }
  }

  addToWishList (product: Product) {
    if (this.isActive('wishlist')) {
      this.store.dispatch(removeFromWishList({ id: product.id }));
      this.showNotification(product.title, 'removed from wishlist');
    } else {
      this.store.dispatch(addToWishList({product}));
      this.showNotification(product.title, 'added to wishlist');
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  ngOnInit(): void {}
}
