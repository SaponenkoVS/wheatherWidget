import {provideRouter, RouterModule, Routes} from "@angular/router";
import {WidgetComponent} from "./components/widget/widget.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', redirectTo: "widget", pathMatch: "full"},
  {path: "widget", component: WidgetComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [provideRouter(routes)]
})
export class AppRoutingModule{}
