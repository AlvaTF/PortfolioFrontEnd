import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../model/proyectos';
import { ProyectosService } from '../service/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit{

  proyecto: Proyectos = null;

  constructor(
    private proyectoS: ProyectosService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
      data =>{
        this.proyecto = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }

  

}
