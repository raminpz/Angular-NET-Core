import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listEstudiantes: any[] = [
    {nombre: 'Thomas Muller', estado: 'Promocionado'},
    {nombre: 'Lionel Messio', estado: 'Regular'},
    {nombre: 'Robert Lewandosky', estado: 'Regular'},
    {nombre: 'Maria Gomez', estado: 'Promocionado'},
    {nombre: 'Nicolas Nuñez', estado: 'Libre'},
    {nombre: 'Patricia Garcia', estado: 'Libre'}
  ];


  mostrar = true;
  toogle(): void{
    this.mostrar = !this.mostrar;
  }

}


