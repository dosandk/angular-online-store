import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../modules/shared.module";
import {SearchComponent} from "../../components/search/search.component";

@NgModule({
  declarations: [
    MainComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
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
