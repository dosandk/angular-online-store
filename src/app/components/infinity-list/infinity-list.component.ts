import {
  Component,
  EventEmitter,
  OnInit,
  OnDestroy,
  Input,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-infinity-list',
  templateUrl: './infinity-list.component.html',
  styleUrls: ['./infinity-list.component.scss']
})
export class InfinityListComponent implements OnInit, OnDestroy {
  @Input() pageStart = 0;
  @Output() scrolled = new EventEmitter<number>();
  @ViewChild('anchor', { static: true }) public anchor!: ElementRef;

  page = 0;

  private observer!: IntersectionObserver;

  onScroll = (entries: any) => {
    const [target] = entries;

    if (target.isIntersecting) {
      this.scrolled.emit(this.page += 1);
    }
  }

  ngOnInit(): void {
    this.page = this.pageStart;

    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };

    this.observer = new IntersectionObserver(this.onScroll, options);
    this.observer.observe(this.anchor.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
