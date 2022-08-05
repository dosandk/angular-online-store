import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {debounceTime, distinctUntilChanged, Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() search$ = new EventEmitter<string>();

  private inputValue$ = new Subject<string>();
  private searchSubscription?: Subscription;

  onSearch (event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.inputValue$.next(value?.trim());
  }

  ngOnInit(): void {
    this.searchSubscription = this.inputValue$
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((value: string) => {
        this.search$.emit(value);
      });
  }

  ngOnDestroy () {
    this.searchSubscription?.unsubscribe();
  }
}
