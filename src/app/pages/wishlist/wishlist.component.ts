import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

import { Component, OnInit } from '@angular/core';

import {Product} from "@interfaces/product";
import {AppState} from "../../reducers";
import {wishlistSelector, removeFromWishList} from "../../reducers/wish-list";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  // pageSize isn't a public property. Please use as a private readonly in this case
  private readonly pageSize = 3;
  pageIndex = 0;
  // we can directly assign observable values here during initialization
  wishlistProducts$: Observable<Product[]> = this.store.select(wishlistSelector);

  constructor(private store: Store<AppState>) {}

  // the trackBy used to improve the performance of the angular project
  // https://www.red-gate.com/simple-talk/blogs/explain-ngfor-trackby-in-angular/
  public trackByProductFn(index: number, item: Product): string {
    return item.id;
  }

  getCardsListData (products: Product[]) {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;

    return products.slice(start, end);
  }

  setPage (pageIndex: number) {
    this.pageIndex = pageIndex;
  }

  removeCard (id: string) {
    this.store.dispatch(removeFromWishList({ id }));
    this.pageIndex = 0;
  }

  getTotalPages (productsLength: number): number {
    return Math.ceil(productsLength / this.pageSize);
  }
  // try to remove unused methods
  ngOnInit(): void {}
}
