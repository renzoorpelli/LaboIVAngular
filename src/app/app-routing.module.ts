import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from "@angular/router"
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';


//Declaro las rutas asignadas a los componentes en el formato path => componente
const ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'error', component: ErrorComponent},
  {path: '', component: BienvenidoComponent}
]


//este decorador, es utilizado para definir el modelo de rutas de la aplicacion
@NgModule({
  //importa el modulo en la aimplicacion tomando un array de rutas como parametro en el metodo forRoot
  imports: [RouterModule.forRoot(ROUTES)],
  //exporta el RouterModule para ser utilizado por otros modulos en la aplicacion
  exports: [RouterModule]
})
export class AppRoutingModule { }
