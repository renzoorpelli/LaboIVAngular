import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private _usuarios: Usuario[];

  get usuarios(): Usuario[] {
    return [...this._usuarios];
  }

  constructor() {
    this._usuarios = [];
    console.log('--- SERVICIO USUARIOS INICIALIZADO ---');
  }

  // VALIDACIONES

  // metodo encargado de verificar si un mail recibido es valido
  verifyMail(mail: string): boolean {
    const emailPattern: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return emailPattern.test(mail);
  }

  // metodo encargado de verificar si la password cumple con lso requerimientos
  verifyPassword(password: string): boolean {
    const passwordPattern: RegExp = /^.{5,}$/;

    return passwordPattern.test(password);
  }

   //verifica que el usuario no exista, utilizado al momento de registrar
   verifyUser(mail:string):boolean{
    return this._usuarios.some(u => u.mail == mail);
  }


  // metodo utilizado para simular la accion de iniciar sesion, verificando por mail y password
  verifyUserCredentials(mail:string, password:string) : boolean{
     this.getUsersFromLocalStorage();
     const user = this._usuarios.filter(u => u.mail == mail && u.password == password)[0];
     if(user == null){
        return false;
     }
     this.setUserToLocalStorage(user);
     return true;

  }


  // FUNCIONALIDADES


  /// Agrega un usuario al array de usuarios
  // data: los datos del usuario que se quiere agregar  del componente Login

  // tres acontecimientos por los cuales puede fallar agregar un usuario
  // 1 => el mail es invlalido
  // 2 => la password es invalida
  // 3 => el usuario ya existe
  addUser(data: Usuario): boolean {

    if(data.mail == null && data.password == null){
      return false;
    }
    if (!this.verifyMail(data.mail)) {
      return false;
    }
    if (!this.verifyPassword(data.password)) {
      return false;
    }
    if(this.verifyUser(data.mail)){
      return false;
    }

    this.getUsersFromLocalStorage();
    this._usuarios.push(data);
    this.refreshLocalStorage(this._usuarios);

    return true;
  }



  // metodo encargado de actualizar los usuarios que se encuentran registrados en el local storage
  // si existe la key usuarios, limpia y aztualiza su contenido
  // si no existe la key, la crea con su contenido inicial
  refreshLocalStorage(data: Usuario[]){
    const usersFromLocalStorage = localStorage.getItem('usuarios');
    if(usersFromLocalStorage == null){
       localStorage.setItem('usuarios', JSON.stringify(data));
    }else{
      localStorage.clear();
      localStorage.setItem('usuarios', JSON.stringify(data));
    }
  }

  // metodo utilizado para iniciar sesion
  setUserToLocalStorage(data: Usuario){
    const currentUserFromLocalStorage = localStorage.getItem('currentUser');
    let usrStringify = JSON.stringify(data);

    if(currentUserFromLocalStorage == null){
      localStorage.setItem('currentUser', usrStringify);
    }else{
      localStorage.removeItem('currentUser');
      localStorage.setItem('currentUser', usrStringify);
    }
  }

  //obtiene los datos del usuario que se encuentra con la sesion iniciada
  getCurrentUserLocalStorage():Usuario | null{
    const currentUserFromLocalStorage = localStorage.getItem('currentUser');
    if(currentUserFromLocalStorage != null){
      let usr = JSON.parse(currentUserFromLocalStorage);

      let usrToModel : Usuario = {
        mail : usr.mail,
        password: usr.password

      };

      return usrToModel;
    }
    return null;
  }

  //Obtiene todos los usuarios que se encuentran alamacenados en el localStorage
  getUsersFromLocalStorage(){
    const usuarios = JSON.parse(localStorage.getItem('usuarios')!);
    if(usuarios != null){
      this._usuarios = usuarios;
    }
  }
}
