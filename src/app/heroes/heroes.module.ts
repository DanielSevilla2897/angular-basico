import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
    declarations: [
        ListadoComponent,
        HeroComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]

})
export class HeroesModule{
}