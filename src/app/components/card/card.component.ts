import {Store} from "@ngrx/store";

import {Component, OnInit, Input} from '@angular/core';

import {AppState} from "../../reducers";
import {addToCart, cartSelector, removeFromCart} from "../../reducers/cart";
import {addToWishList, removeFromWishList, wishlistSelector} from "../../reducers/wish-list";
import {Product} from "@interfaces/product";
import { NotificationService } from 'src/app/services/notification.service';
import { cartStatusNotificationsConfig } from '../../constants/cart-status-notifications.config';

type productsList = 'cart' | 'wishlist';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product!: any;
  @Input() showFooter = true;

  cartProducts = [];
  wishlistProducts = [];

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
      // IMPORTANT! Memory leaks. Please consider solution in src/app/pages/cart/cart-page.component.ts file
      .subscribe(products => {
        this.cartProducts = products;
      });

    store.select(wishlistSelector)
      // IMPORTANT! Memory leaks. Please consider solution in src/app/pages/cart/cart-page.component.ts file
      .subscribe(products => {
        this.wishlistProducts = products;
      })
  }

  showNotification (title: string, action: string) {
    const message = `Product "${title}" was successfully ${action}`;

    this.notificationService.show(message);
  }

  addToCart (product: Product) {
    if (this.isActive('cart')) {
      this.store.dispatch(removeFromCart({ id: product.id }));
      // try to keep a static text in constants. Please consider a solution below:
      this.showNotification(product.title, cartStatusNotificationsConfig.REMOVED_FROM_CART);
    } else {
      this.store.dispatch(addToCart({product}));
      this.showNotification(product.title, cartStatusNotificationsConfig.ADDED_TO_CART);
    }
  }

  addToWishList (product: Product) {
    if (this.isActive('wishlist')) {
      this.store.dispatch(removeFromWishList({ id: product.id }));
      this.showNotification(product.title, cartStatusNotificationsConfig.REMOVED_FROM_WISHLIST);
    } else {
      this.store.dispatch(addToWishList({product}));
      this.showNotification(product.title, cartStatusNotificationsConfig.ADDED_TO_WISHLIST);
    }
  }

  ngOnInit(): void {}
}
