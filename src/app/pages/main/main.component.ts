import {Component, OnInit} from '@angular/core';
import {Product} from "@interfaces/product";
import {ProductsService} from "../../services/products.service";
import {LocalService} from "../../services/local.service";
import {tableConfig} from './sortable-table-config'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  viewMode = 'grid'
  pageStart = 0;
  pageSize = 10;
  loading = false;
  tableConfig = tableConfig;
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private localStore: LocalService
  ) {}

  ngOnInit(): void {
    const {start, end} = this.getPagination(0);

    this.loadMore(start, end);
    this.viewMode = this.localStore.getData('mode') || 'grid';
  }

  changeView(viewMode = '') {
    this.viewMode = viewMode;
    this.localStore.saveData('mode', this.viewMode);
  }

  getPagination(pageIndex: number) {
    const start = pageIndex * this.pageSize;
    const end = start + this.pageSize;

    return {start, end};
  }

  onScroll(pageIndex: number) {
    const {start, end} = this.getPagination(pageIndex);

    this.loadMore(start, end);
  }

  onSearch(value: string) {
    if (this.loading) return;

    this.loading = true;

    this.productsService.search(value)
      .subscribe(products => {
        this.products = [...products];

        this.loading = false;
      });
  }

  loadMore(start: number, end: number) {
    if (this.loading) return;

    this.loading = true;

    this.productsService.get(start, end)
      .subscribe(products => {
        this.products = [...this.products, ...products];

        this.loading = false;
      });
  }
}

