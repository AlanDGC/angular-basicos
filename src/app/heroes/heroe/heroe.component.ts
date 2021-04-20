import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',

})
export class HeroeComponent {  //Concepto de one way data binding

    nombre: string = 'IronMan';
    edad  : number = 45;

    get nombreCapitalizado(): string { //-> (get) Crear una propiedad que cuando sea llamada, va hacer procesada
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${ this.nombre } - ${ this.edad }`;
        // -> Seria lo mismo    return this.nombre + '-' + this.edad;
    }

    cambiarNombre(): void {
        this.nombre = 'SpiderMan'
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
}