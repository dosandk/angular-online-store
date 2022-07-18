import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { CartPageComponent } from './cart-page.component';
import { CartComponent } from '../../components/cart/cart.component';

@NgModule({
  declarations: [
    CartPageComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CartPageComponent
      }
    ])
  ]
})
export class CartPageModule { }
