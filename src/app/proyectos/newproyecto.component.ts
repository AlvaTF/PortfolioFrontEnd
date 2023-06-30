import { Component } from '@angular/core';
import { ProyectosService } from '../service/proyectos.service';
import { Router } from '@angular/router';
import { Proyectos } from '../model/proyectos';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent {
  nombre: string;
  descripcion: string;

  constructor(private proyectoS: ProyectosService, private router: Router) { }

  onCreate(): void{
    const proyecto = new Proyectos(this.nombre, this.descripcion);
    this.proyectoS.save(proyecto).subscribe(
      data =>{
        alert("Educacion añadida");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir Educación");
        this.router.navigate(['']);
      }
    )
  }
}
