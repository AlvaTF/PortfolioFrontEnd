import { Component } from '@angular/core';
import { ExperienciaService } from '../service/experiencia.service';
import { Router } from '@angular/router';
import { Experiencia } from '../model/experiencia';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia: ExperienciaService, private router: Router){}

  onCreate(): void{
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(
      data=>{
      alert('Experiencia añadida');
      this.router.navigate(['']);
    }, err=>{
      alert('Fallo al añadir experiencia');
      this.router.navigate(['']);
    })
  }
}
