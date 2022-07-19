import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/fixtures/products';
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  products: Product[] = products;

  removeCard () {
    console.error('remove');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
