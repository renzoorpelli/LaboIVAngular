import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public mail: string;
  public password: string;

  private _usuarioService: UsuariosService;

  constructor(usuarioService: UsuariosService) {
    this._usuarioService = usuarioService;
  }

  login() {
    if (this.mail == null && this.password == null) {
      this.showModalError('no pueden estar vacios');
      return;
    }

    if (!this._usuarioService.verifyUserCredentials(this.mail, this.password)) {
      this.showModalError('el usuario no existe o las credenciales son incorrectas');
      return;
    } else {
      this.showModalSuccess('Sesión iniciada con éxito!');
    }
  }

  showModalError(descripcion:string) {
    Swal.fire({
      title: 'Error!',
      text:descripcion,
      icon: 'error',
      confirmButtonText: 'Aceptar',
    });
  }

  showModalSuccess(descripcion:string){
    Swal.fire({
      title: 'Sucess!',
      text: descripcion,
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  }

  showModalWarning(){
    Swal.fire({
      title: 'Warning!',
      text: 'Do you want to continue',
      icon: 'warning',
      confirmButtonText: 'Cool',
    });
  }
}
