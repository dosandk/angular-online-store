import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../modules/shared.module";
import {SearchComponent} from "../../components/search/search.component";
import {FormsModule} from "@angular/forms";
import {SortableTableComponent} from "../../components/sortable-table/sortable-table.component";

@NgModule({
  declarations: [
    MainComponent,
    SearchComponent,
    SortableTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent
      }
    ]),
    FormsModule
  ],
  exports: [],
})
export class MainModule {}

