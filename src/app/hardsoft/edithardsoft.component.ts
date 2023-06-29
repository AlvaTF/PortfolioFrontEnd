import { Component, OnInit } from '@angular/core';
import { SkillService } from '../service/skill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from '../model/skills';

@Component({
  selector: 'app-edithardsoft',
  templateUrl: './edithardsoft.component.html',
  styleUrls: ['./edithardsoft.component.css']
})
export class EdithardsoftComponent implements OnInit{
  skill: Skills = null;

  constructor(
    private skillS: SkillService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }
}
