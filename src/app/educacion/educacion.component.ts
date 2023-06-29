import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion';
import { EducacionService } from '../service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  educacion: Educacion[] = [];

  constructor(private educacionS: EducacionService){}


  ngOnInit(): void {
    this.educacionS.lista().subscribe(
      data=>{
        this.educacion = data
      }
    );
  }

  delete(id?: number){
    if(id != undefined){
      this.educacionS.delete(id).subscribe(
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
