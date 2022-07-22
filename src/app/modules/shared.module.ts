import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardComponent} from "../components/card/card.component";
import {InfinityListComponent} from "../components/infinity-list/infinity-list.component";
import {CardsListComponent} from "../components/cards-list/cards-list.component";
import {NotificationComponent} from "../components/notification/notification.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    InfinityListComponent,
    CardsListComponent,
    NotificationComponent
  ],
  exports:[
    CardComponent,
    InfinityListComponent,
    CardsListComponent,
    NotificationComponent
  ]
})
export class SharedModule { }
