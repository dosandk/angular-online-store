import {Component, OnInit} from '@angular/core';
import {products} from "../../fixtures/products";
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  viewMode = 'grid'
  products: Product[] = products;

  constructor() {}

  changeView (viewMode = '') {
    this.viewMode = viewMode;
  }

  onScroll (page: number) {
    console.error('page', page);

    this.products = [...this.products, ...products];
  }

  ngOnInit(): void {
  }

}

