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

  constructor() { }

  goToPage (event: Event, pageIndex: number) {
    event.preventDefault();

    console.error('pageIndex', pageIndex);

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

  ngOnInit(): void {
  }

}
