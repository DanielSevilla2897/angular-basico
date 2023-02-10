import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './portfolio/personal/personal.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EstudiosComponent } from './portfolio/estudios/estudios.component';
import { ExperienciaComponent } from './portfolio/experiencia/experiencia.component';
import { CertificadosComponent } from './portfolio/certificados/certificados.component';
import { ProyectosComponent } from './portfolio/proyectos/proyectos.component';

const routes: Routes = [


  {
      path: '', 
      component: PersonalComponent, 
      pathMatch: 'full' 
  },
  {
      path: 'estudios', // LOCALHOST:4200/REGION
      component: EstudiosComponent //Se muestra este componente
  },
  {
      path: 'experiencia',
      component: ExperienciaComponent
  },
  {
      path: 'certificados', //LOCALHOST:4200/ID/002
      component: CertificadosComponent //Muestra el pais con ese id
  },
  {
    path: 'proyectos', //LOCALHOST:4200/ID/002
    component: ProyectosComponent //Muestra el pais con ese id
},
  {
      path: '**', //LOCALHOST:4200/CUALQUIER COSA
      redirectTo: '' //Devuelve al path de inicio a la ruta vacia
  }


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
