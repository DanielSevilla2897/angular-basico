import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificadosComponent } from './certificados/certificados.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { PersonalComponent } from './personal/personal.component';
import { ProyectosComponent } from './proyectos/proyectos.component';



@NgModule({
  declarations: [
    PersonalComponent,
    EstudiosComponent,
    ExperienciaComponent,
    CertificadosComponent,
    ProyectosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonalComponent,
    EstudiosComponent,
    ExperienciaComponent,
    CertificadosComponent,
    ProyectosComponent
  ]
})
export class PortfolioModule { }
