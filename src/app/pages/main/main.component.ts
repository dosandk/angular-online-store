import {Component, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";
import {BehaviorSubject} from "rxjs";
import {ProductsService} from "../../services/products.service";
import {LocalService} from "../../services/local.service";

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

  products: Product[] = [];
  products$ = new BehaviorSubject<Product[]>([]);

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

  loadMore (start: number, end: number) {
    this.loading = true;

    this.productsService.get(start, end)
      .subscribe(products => {
        this.products = [...this.products, ...products];
        this.products$.next(this.products);

        this.loading = false;
      });
  }
}

