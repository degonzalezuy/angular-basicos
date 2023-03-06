import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Roshi',
    poder: 1000
  }
 
  agregarNuevoPersonaje(personaje: Personaje){
    this.personajes.push(personaje);

  }

  constructor(private dbzService:DbzService){
    this.personajes = this.dbzService.personajes;
  }
}
