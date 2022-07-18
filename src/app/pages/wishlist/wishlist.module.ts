import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WishlistComponent
      }
    ])
  ]
})
export class WishlistModule { }
