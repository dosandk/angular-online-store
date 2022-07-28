import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() activePageIndex = 0;
  @Input() totalPages = 0;

  @Output() pageChange = new EventEmitter<number>();

  // remove unused constructor
  constructor() { }

  goToPage (event: Event, pageIndex: number) {
    event.preventDefault();

    // use a curly braces when a block contains only one statement. It is considered by many to be best practice
    // https://eslint.org/docs/latest/rules/curly
    if (pageIndex === this.activePageIndex) return;
    if (pageIndex > this.totalPages - 1 || pageIndex < 0) return;

    this.activePageIndex = pageIndex;
    this.pageChange.emit(this.activePageIndex);
  }

  goToPrevPage (event: Event) {
    event.preventDefault();

    this.goToPage(event, this.activePageIndex - 1);
  }

  goToNextPage (event: Event) {
    event.preventDefault();

    this.goToPage(event, this.activePageIndex + 1);
  }

  createRange (length: number): Array<boolean> {
    return new Array(length).fill(true);
  }

  // remove unused method
  ngOnInit(): void {
  }

}
