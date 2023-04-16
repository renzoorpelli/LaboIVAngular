import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuariosModule } from './usuarios/usuarios.module';
import { CommonCustomModule } from './common/common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonCustomModule,
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
