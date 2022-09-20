import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';

import { Product } from "@interfaces/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() product!: Product;

  @Input() totalPrice: number = 0;
  @Output() totalPriceChange = new EventEmitter<number>();
  @Output() removeItem = new EventEmitter<string>();

  counter = 1;

  removeCount () {
    this.counter -= 1;

    if (this.counter === 0) {
      this.removeItem.emit(this.product.id);
    }

    this.totalPriceChange.emit(this.totalPrice - this.product.price);
  }

  addCount () {
    this.counter += 1;
    this.totalPriceChange.emit(this.totalPrice + this.product.price);
  }

  ngOnInit(): void {}
}
