import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";

// please keep interfaces/enums/constants in a separate file.
interface ITableConfig {
  id: string;
  title: string;
  sortable: boolean;
  sortType?: string;
  template?: any;
}

@Component({
  selector: 'app-sortable-table',
  templateUrl: './sortable-table.component.html',
  styleUrls: ['./sortable-table.component.scss']
})
export class SortableTableComponent implements OnInit {

  @Input() tableConfig: ITableConfig[] = [];
  @Input() products: Product[] = [];

  // remove unused methods
  constructor() { }

  ngOnInit(): void {
  }

}
