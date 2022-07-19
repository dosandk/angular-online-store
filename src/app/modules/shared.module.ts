import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardComponent} from "../components/card/card.component";
import {InfinityListComponent} from "../components/infinity-list/infinity-list.component";
import {CardsListComponent} from "../components/cards-list/cards-list.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    InfinityListComponent,
    CardsListComponent
  ],
  exports:[
    CardComponent,
    InfinityListComponent,
    CardsListComponent
  ]
})
export class SharedModule { }
