import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../reducers";
import {addToCart, cartSelector} from "../../reducers/cart";
import {addToWishList, wishlistSelector} from "../../reducers/wish-list";
import {Observable} from "rxjs";
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() product!: any;
  @Input() showFooter = true;

  cartProducts$: Observable<Product[]>;
  wishlistProducts$: Observable<Product[]>;

  isActive = (product: Product) => {
    return product.id === this.product.id;
  }

  constructor(private store: Store<AppState>) {
    this.cartProducts$ = store.select(cartSelector);
    this.wishlistProducts$ = store.select(wishlistSelector);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: any): void {}

  addToCart (product: Product) {
    this.store.dispatch(addToCart({product}));
  }

  addToWishList (product: Product) {
    this.store.dispatch(addToWishList({product}));
  }
}
