import { CommonModule } from '@angular/common'; // Funciona para importar un modulo que contiene funciones (ngIf, ngFor, entre otras)
import { NgModule } from '@angular/core';  // Para crear un nuevo modulo se debe de importar NgModule

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';




@NgModule ({  // Se crea el decorador para la configuración
    declarations: [  // Es un arreglo que contiene este modulo (componentes, pipes)
        HeroeComponent,
        ListadoComponent
    ],

    exports: [  // Es un arreglo que contiene los componentes que se va a exportar o hacer visibles para toda la aplicaión
        ListadoComponent
    ],

    imports: [  //Es un arreglo que contiene modulos   
        CommonModule // Funciona para importar un modulo que contiene funciones (ngIf, ngFor, entre otras)
    ]
})
export class HeroesModule {  // Se debe de exportar la clase para que sea visible 
    
}