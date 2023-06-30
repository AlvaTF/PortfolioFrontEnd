import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HardsoftComponent } from './hardsoft/hardsoft.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './experiencias/new-experiencia.component';
import { EditExperienciaComponent } from './experiencias/edit-experiencia.component';
import { NeweducacionComponent } from './educacion/neweducacion.component';
import { EditeducacionComponent } from './educacion/editeducacion.component';
import { EdithardsoftComponent } from './hardsoft/edithardsoft.component';
import { NewhardsoftComponent } from './hardsoft/newhardsoft.component';
import { EditacercaComponent } from './acerca/editacerca.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NewproyectoComponent } from './proyectos/newproyecto.component';
import { EditproyectoComponent } from './proyectos/editproyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaComponent,
    ExperienciasComponent,
    EducacionComponent,
    HardsoftComponent,
    ProyectosComponent,
    LoginComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EdithardsoftComponent,
    NewhardsoftComponent,
    EditacercaComponent,
    NewproyectoComponent,
    EditproyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
