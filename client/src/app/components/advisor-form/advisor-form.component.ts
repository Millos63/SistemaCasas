import { Component, OnInit } from '@angular/core';
import { Advisor } from 'src/app/models/Advisor';
import { AdvisorService } from 'src/app/services/advisor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advisor-form',
  templateUrl: './advisor-form.component.html',
  styleUrls: ['./advisor-form.component.css']
})
export class AdvisorFormComponent implements OnInit {
  advisor: Advisor = {
    idAdvisor: 0,
    firstName : "",
    lastName: "",
    email: "",
    phoneNumber: "",
    notes: ""
  }

  selectedId: string = '';

  ngOnInit(): void {
    this.cargar();
  }
  constructor(private advisorService: AdvisorService, private activatedRoute:ActivatedRoute){

  }


  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['idAdvisor'];
        if(id){
          this.advisorService.get(id).subscribe(
            es=>this.advisor=es,
            this.selectedId = id
          );
        }
      }
    )
  }

  update():void{
    this.advisorService.update(this.selectedId,this.advisor).subscribe(
      res => {console.log(res)},
      err => console.error(err)
    );
  }

  saveNewAdvisor(){
    delete this.advisor.idAdvisor;
    
    this.advisorService.save(this.advisor).subscribe(
      res =>{console.log(res)},
      err => console.error(err)
    );
  }

}
