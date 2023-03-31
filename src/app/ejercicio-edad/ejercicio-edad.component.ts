import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-edad',
  templateUrl: './ejercicio-edad.component.html',
  styleUrls: ['./ejercicio-edad.component.css']
})
export class EjercicioEdadComponent {

  public edad1:number;
  public edad2:number;
  public promedio:number;

  onCalcularEdad(){
      if(this.edad1 != null && this.edad2 != null){
        this.promedio = (Number(this.edad1) + Number(this.edad2)) / 2;
      }
  }
}
