import { Component, OnInit } from '@angular/core';
import { Skills } from '../model/skills';
import { SkillService } from '../service/skill.service';

@Component({
  selector: 'app-hardsoft',
  templateUrl: './hardsoft.component.html',
  styleUrls: ['./hardsoft.component.css']
})
export class HardsoftComponent implements OnInit{
  skill: Skills[] = [];

  constructor(private skillS: SkillService){}

  ngOnInit(): void {
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    );
  }

  

  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
          this.ngOnInit();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
  

}
