import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosService } from './services/usuarios-service.service';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsuariosRoutingModule,
    SweetAlert2Module.forChild()
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [UsuariosService]
})
export class UsuariosModule { }
