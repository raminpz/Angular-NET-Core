import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Ramiro';
  textoPlaceholder = 'Escriba algo aqui';
  deshabilitado = true;
  imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png';

  constructor(){
    setInterval(() => this.deshabilitado = false, 3000);
  }

  getSuma(numero1: number, numero2: number){
    return numero1 + numero2;
  }
}


