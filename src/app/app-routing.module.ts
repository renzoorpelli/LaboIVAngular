import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsuariosModule } from "./usuarios/usuarios.module";
import { CommonCustomModule } from "./common/common.module";

// En el enrutador principal cargamos las rutas del modulo de Usuarios
const routes: Routes = [
  { path: 'home', loadChildren: () => CommonCustomModule},
  { path: 'usuarios', loadChildren: () => UsuariosModule }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
