import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../modules/shared.module";
import {PaginationComponent} from "../../components/pagination/pagination.component";

@NgModule({
  declarations: [
    WishlistComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: WishlistComponent
      }
    ])
  ]
})
export class WishlistModule { }
