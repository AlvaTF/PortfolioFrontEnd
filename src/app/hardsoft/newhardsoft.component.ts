import { Component, OnInit } from '@angular/core';
import { Skills } from '../model/skills';
import { SkillService } from '../service/skill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newhardsoft',
  templateUrl: './newhardsoft.component.html',
  styleUrls: ['./newhardsoft.component.css']
})
export class NewhardsoftComponent implements OnInit{
  nombre: string;
  porcentaje: number;

  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skills(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe(
      data => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la skill");
        this.router.navigate(['']);
      }
    )
  }
}
