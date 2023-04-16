import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios-service.service';
import { Usuario } from '../interfaces/Usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  public mail: string;
  public password:string;
  public confirmPassword:string;
  private _usuarioService:UsuariosService;

  constructor(usuarioService:UsuariosService){
    this._usuarioService = usuarioService;
  }

  addUser(){

    if(this.password !== this.confirmPassword){
      this.showModalError('Las contraseñas no coinciden :(')
      return;
    }

    let usuario: Usuario = {
      mail: this.mail,
      password: this.password
    }


    if(this._usuarioService.addUser(usuario)){
      this.showModalSuccess('Usuario registrado con éxito');
    }else{
      this.showModalError('No se a podido registrar con éxito, recuerda que tus credenciales sigan la siguiente forma.\nMail : nombre@mail.com\nContraseña: al menos 5 caracteres.\nPuede ser que el mail ya se encuentre registrado.')
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
}
