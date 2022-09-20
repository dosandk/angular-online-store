import { Component, OnInit } from '@angular/core';

import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

import {Product} from "@interfaces/product";
import {AppState} from "../../reducers";
import {wishlistSelector, removeFromWishList} from "../../reducers/wish-list";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  pageSize = 3;
  pageIndex = 0;
  wishlistProducts$!: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.wishlistProducts$ = store.select(wishlistSelector);
  }

  public trackByProduct(index: number, item: Product): string {
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

  ngOnInit(): void {}
}
