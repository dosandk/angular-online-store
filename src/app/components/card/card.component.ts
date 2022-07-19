import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() product!: any;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: any): void {}

  addToCart () {
    console.error('addToCart');
  }

  addToWishList () {
    console.error('addToWishList');
  }

  isActive (type: string): string {
    return 'active';
  }
}
