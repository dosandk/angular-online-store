import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent
      }
    ])
  ],
  exports: [],
})
export class MainModule {}
