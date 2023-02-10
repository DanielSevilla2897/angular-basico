import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [

    {
        path: '', //RUTA VACIA y principal: LOCALHOST:4200
        component: PorPaisComponent, //Se muestra este componente
        pathMatch: 'full' //Importante
    },
    {
        path: 'region', // LOCALHOST:4200/REGION
        component: PorRegionComponent //Se muestra este componente
    },
    {
        path: 'capital',
        component: PorCapitalComponent 
    },
    {
        path: 'pais/:id', //LOCALHOST:4200/ID/002
        component: VerPaisComponent //Muestra el pais con ese id
    },
    {
        path: '**', //LOCALHOST:4200/CUALQUIER COSA
        redirectTo: '' //Devuelve al path de inicio a la ruta vacia
    }

]


@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}