import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardComponent} from "../components/card/card.component";
import {InfinityListComponent} from "../components/infinity-list/infinity-list.component";
import {CardsListComponent} from "../components/cards-list/cards-list.component";
import {NotificationComponent} from "../components/notification/notification.component";

// in order to avoid the duplication please consider the following solution:
const COMPONENTS = [
  CardComponent,
  InfinityListComponent,
  CardsListComponent,
  NotificationComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports:[
    ...COMPONENTS
  ]
})
export class SharedModule { }
