import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  //Directiva *ngFor

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán America'];
  deleteHeroe: string = ''; // Se tiene que crear una propiedad o un metodo para imprimir. Para hacer el ngIf va a tomar si esta vacio, null, false, undefined, por eso en el ejemplo solo se coloca la variable deleteHeroe y lo oculta bien en el html

  borrarHeroe() {
    this.deleteHeroe =  this.heroes.shift() || ''; // shift sirve para borrar el primer elemento del array, marcara error si no le colocamos || ''. Porque como el shift recibe el tipo string y undefined  asi que se le coloca || (or) y '' (string vacio)
  }                                                // Si retorna undefined regresara un string vacio ('')

}
