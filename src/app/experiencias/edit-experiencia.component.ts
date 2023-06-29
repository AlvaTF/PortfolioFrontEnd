import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { ExperienciaService } from '../service/experiencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{
  explab:Experiencia = null;

  constructor(private sExperiencia: ExperienciaService, private activatedrouter: ActivatedRoute, private router: Router){}


  ngOnInit(): void {
    const id = this.activatedrouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.explab = data;
      }, err =>{
        alert("Fallo al modificar");
      this.router.navigate([''])
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedrouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.explab).subscribe(
      data=>{this.router.navigate([''])},
      err =>{alert("Fallo al modificar");
      this.router.navigate([''])
    }
    )
  }

}
