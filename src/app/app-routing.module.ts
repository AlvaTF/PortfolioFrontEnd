import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewExperienciaComponent } from './experiencias/new-experiencia.component';
import { EditExperienciaComponent } from './experiencias/edit-experiencia.component';
import { EditeducacionComponent } from './educacion/editeducacion.component';
import { NeweducacionComponent } from './educacion/neweducacion.component';
import { NewhardsoftComponent } from './hardsoft/newhardsoft.component';
import { EdithardsoftComponent } from './hardsoft/edithardsoft.component';
import { EditacercaComponent } from './acerca/editacerca.component';
import { NewproyectoComponent } from './proyectos/newproyecto.component';
import { EditproyectoComponent } from './proyectos/editproyecto.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'nuevaexp', component:NewExperienciaComponent},
  {path: 'editexp/:id', component:EditExperienciaComponent},
  {path: 'nuevaedu', component:NeweducacionComponent},
  {path: 'editedu/:id', component:EditeducacionComponent},
  {path: 'newskill', component:NewhardsoftComponent},
  {path: 'editskill/:id', component:EdithardsoftComponent},
  {path: 'editacerca/:id', component:EditacercaComponent},
  {path: 'nuevoproyecto', component:NewproyectoComponent},
  {path: 'editproyecto/:id', component:EditproyectoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
