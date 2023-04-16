import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "../common/home/home.component";
import { ErrorComponent } from "../common/error/error.component";


const routes:Routes = [
  {path: '', component: HomeComponent},
  {path: '**', component: ErrorComponent}
]

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})


export class CommonRoutingModule{}
