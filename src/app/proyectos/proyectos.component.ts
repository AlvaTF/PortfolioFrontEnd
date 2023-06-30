import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../model/proyectos';
import { ProyectosService } from '../service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyecto: Proyectos[] = [];

  constructor(private poyectoS: ProyectosService){}


  ngOnInit(): void {
    this.poyectoS.lista().subscribe(
      data=>{
        this.proyecto = data
      }
    );
  }

  delete(id?: number){
    if(id != undefined){
      this.poyectoS.delete(id).subscribe(
        data=>{
          this.ngOnInit(),
          alert("Se eliminó correctamente");
        }, err=>{
          alert("Fallo al eliminar")
        }
      )
  }
}

}
