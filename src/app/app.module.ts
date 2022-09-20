import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainModule} from "./pages/main/main.module";
import { StoreModule } from '@ngrx/store';

import { wishlistReducer, cartReducer } from './reducers';
import {HttpClientModule} from "@angular/common/http";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {SharedModule} from "./modules/shared.module";
import {NotificationManagerComponent} from "./components/notification-manager/notification-manager.component";

@NgModule({
  declarations: [
    AppComponent,
    NotificationManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      wishlist: wishlistReducer,
      cart: cartReducer
    }),
    AppRoutingModule,
    SharedModule,
    MainModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
