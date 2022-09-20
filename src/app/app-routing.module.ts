import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/main/main.module')
      .then(module => module.MainModule)
  },
  {
    path: 'wishlist', loadChildren: () => {
      return import('./pages/wishlist/wishlist.module')
        .then(module => {
          return module.WishlistModule;
        });
    }
  },
  {
    path: 'cart', loadChildren: () => {
      return import('./pages/cart/cart-page.module')
        .then(module => {
          return module.CartPageModule;
        });
    }
  },
  {
    path: '**', loadChildren: () => {
      return import('./pages/error404/error404.module')
        .then(module => {
          return module.Error404Module;
        });
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
