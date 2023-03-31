import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Formulario Persona';
  public input = "";

  public numero1: number = 0;
  public numero2 : number = 0;
  public numero3 : number = 0;

  onSubmit(titulo:string){
    this.title = titulo;
  }

  onSumar(){
    this.numero3 = Number(this.numero1) + Number(this.numero2);
  }


}
