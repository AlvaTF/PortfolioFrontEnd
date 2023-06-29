import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../service/experiencia.service';
import { Experiencia } from '../model/experiencia';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit{
experiencia: Experiencia[] = [];

constructor(private sExperiencia: ExperienciaService){}

  ngOnInit(): void {
    this.sExperiencia.lista().subscribe(data => { this.experiencia = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
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
