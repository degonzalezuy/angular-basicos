import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'

})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 45;

    //usando un getter función nueva
    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase()+ ' - ' + this.edad.toString();
    }
    obtenerNombre(): string {
       //return `${this.nombre} - ${this.edad.toString()}`;
        return this.nombre + ' - ' + this.edad.toString();
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        this.edad=30;
    }
}