import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{

  mostrar = true;

  frase: any = {
    mensaje: '¡Ay caramba!',
    autor: 'Bart Simpson'
  };

  personajes: string[] = [
    "Homero",
    "Lisa",
    "Marge",
    "Maggie",
    "Abe"
  ]
  

}
